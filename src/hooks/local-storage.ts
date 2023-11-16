import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

export interface LocalStorageOptions {
  /**
   * <span style="color: #32adff;">If true, initial value will be replaced by the localStorage content, even if it is
   * null.</span>
   */
  replaceIfNull?: boolean;
  /**
   * <span style="color: #32adff;">If true, the localStorage content is ignored at initialization.</span>
   *
   * The value will still be synced to localStorage when changed.
   */
  ignorePreviouslySavedValue?: boolean;
}

/**
 * <span style="color: #32adff;">Sync a state with local storage.</span>
 */
export const useLocalStorageState = <T>(
  localStorageKey: string,
  initialValue: T | (() => T),
  options: LocalStorageOptions = {},
): [T, Dispatch<SetStateAction<T>>, boolean] => {
  const { replaceIfNull, ignorePreviouslySavedValue } = options;

  const [value, setValue] = useState<T>(initialValue as T);
  const [loaded, setLoaded] = useState(false);

  // Sync with local storage when value is updated.
  const doSetValue = useCallback<Dispatch<SetStateAction<T>>>(
    (setter) => {
      if (!loaded) {
        console.error(
          "setting localStorage value while being loaded can cause race conditions, and assign an unpredictable value. " +
            "Please check for the loaded flag to be true before assigning any value.",
        );
      }

      setValue(setter);
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    },
    [loaded],
  );

  useEffect(() => {
    if (loaded) return;

    // Once this effect is ran, value and dispatcher can safely be used.
    setLoaded(true);

    // The previous value is ignored, but we still need to sync the current one to avoid inconsistency.
    if (ignorePreviouslySavedValue) {
      localStorage.setItem(localStorageKey, JSON.stringify(initialValue));
      return;
    }

    // Retrieve saved value.
    const savedValue = localStorage.getItem(localStorageKey);

    if (savedValue != null || replaceIfNull) {
      setValue(savedValue ? JSON.parse(savedValue) : null);
    }
  }, [loaded, ignorePreviouslySavedValue, localStorageKey, initialValue, replaceIfNull]);

  return [value, doSetValue, loaded];
};
