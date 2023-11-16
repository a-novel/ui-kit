import { useCallback, useEffect, useState } from "react";

/**
 * <span style="color: #32adff;">Collection of asynchronous data with unique ids.</span>
 *
 * A data object is a typed promise, that returns the data object asynchronously.
 */
export type Collection<Data, ID extends string | number | symbol = string> = Record<ID, Promise<Data | undefined>>;

/**
 * <span style="color: #32adff;">Status metadata for an asynchronous data value.</span>
 *
 * Wrap the data and states of an asynchronous data value, so it can be statically checked.
 */
export type CollectionEntryStatus<Data> =
  | {
      status: "no-data";
      data?: never;
    }
  | {
      status: "loading";
      data?: Data;
    }
  | {
      status: "success";
      data: Data;
    }
  | {
      status: "error";
      data?: Data;
      error: unknown;
    };

export interface CollectionManagerHook<Data, ID extends string | number | symbol = string> {
  /**
   * <span style="color: #32adff;">Current entries in the collection.</span>
   *
   * Individual entries can be managed through the
   * <span style="color: #ffd600;">{@link useCollectionEntryHandler}</span> hook.
   */
  entries: Collection<Data, ID>;
  /**
   * Delete and reload all entries.
   */
  invalidate: () => void;
}

/**
 * <span style="color: #32adff;">Collection manager invokes an asynchronous data fetching function when any of the given
 * ids changes, only for those ids that have not already been retrieved.</span>
 *
 * You can then handle single entries, with proper status and react state update, through the
 * <span style="color: #ffd600;">{@link useCollectionEntryHandler}</span> hook.
 *
 * Already fetched IDs are retained, even if absent from the ids argument. To clear the list, use the
 * <span style="color: #ffd600;">{@link CollectionManagerHook.invalidate invalidate method}</span>.
 *
 * By the way, changing the reference to the retriever function may cause an infinite rerender loop, so make sure this
 * one is memoized.
 */
export const useCollectionManager = <Data, ID extends string | number | symbol = string>(
  ids: ID[],
  retriever: (ids: ID[]) => Collection<Data, ID>,
): CollectionManagerHook<Data, ID> => {
  const [entries, setEntries] = useState<Collection<Data, ID>>({} as Collection<Data, ID>);

  const update = useCallback(() => {
    setEntries((prevState) => {
      const missingEntries = ids.filter((id) => !(id in prevState));

      // No new IDs have been added.
      // Since we return the same object, it will not trigger a refresh.
      if (missingEntries.length === 0) return prevState;

      // Initiate query for missing entries.
      const getEntries = retriever(missingEntries);

      // Create a shallow copy, so react detect the object has changed and triggers a refresh.
      const newEntries = { ...prevState };

      // Assign each new entry to its id in the collection.
      missingEntries.forEach((entry) => (newEntries[entry] = getEntries[entry]));

      return newEntries;
    });
  }, [ids, retriever]);

  const invalidate = useCallback(() => {
    setEntries({} as Collection<Data, ID>);
    update();
  }, [update]);

  // Trigger a new update every time the update function is updated (when ids or retriever changes).
  useEffect(() => {
    update();
  }, [update]);

  return { entries, invalidate };
};

/**
 * <span style="color: #32adff;">Wrap a <span style="color: #ffd600;">{@link Collection collection}</span> entry
 * into a <span style="color: #ffd600;">{@link CollectionEntryStatus status}</span> object.</span>
 *
 * Status object captures all the data related to the state of an entry (promise, rejects, etc.), so it can be
 * statically checked.
 */
export const useCollectionEntryHandler = <Data, ID extends string | number | symbol = string>(
  entries: Collection<Data, ID>,
  key: ID,
): CollectionEntryStatus<Data> => {
  const [status, setStatus] = useState<CollectionEntryStatus<Data>>({ status: "loading" });

  useEffect(() => {
    setStatus((prevState) => {
      // Key has not been initialized yet.
      if (!(key in entries)) return { status: "loading" };

      const currentEntry = entries[key];

      // Key has been initialized, but no associated data was found.
      if (currentEntry == null) return { status: "no-data" };

      // Update state again once promise is resolved.
      currentEntry
        .then(() => {
          setStatus({ status: "success", data: entries[key] as Data });
        })
        .catch((error) => {
          setStatus((prevState) => ({ status: "error", data: prevState.data, error }));
        });

      // State has not changed (no update).
      return prevState;
    });
  }, [entries, key]);

  return status;
};
