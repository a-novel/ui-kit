import { useEffect, useState } from "react";

/**
 * <span style="color: #32adff;">Use state with async value loader.</span>
 *
 * Extract the value from the promise, and set it as the state value.
 */
export const useAsyncState = <T>(resolve: Promise<T>) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [value, setValue] = useState<T>();

  useEffect(() => {
    setLoading(true);
    resolve
      .then((value) => {
        setError(undefined);
        setValue(value);
        setLoading(false);
      })
      .catch(setError);
  }, [resolve]);

  return [value, { loading, error }] as const;
};
