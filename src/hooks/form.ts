import { useCallback, useEffect, useRef, useState } from "react";

/**
 * <span style="color: #32adff;">Adds a boolean typing status, that stays on for a short while everytime the value
 * is updated.</span>
 *
 * Typing state is held for a certain duration when the value changes, and each new modification resets the typing
 * status.
 *
 * You can control the duration of the typing state with an optional second parameter.
 */
export const useTypingState = <T>(initialState: T, holdFor: number = 600): [T, (newState: T) => void, boolean, T] => {
  const [state, setState] = useState(initialState);
  const [stableState, setStableState] = useState(initialState);
  const [isTyping, setIsTyping] = useState(false);

  // Keep a reference to the timer, so we can clear it when the component unmounts.
  const timer = useRef<NodeJS.Timeout | null>(null);

  const updateState = useCallback(
    (newState: T) => {
      // Cancel the previous timer, so we don't set isTyping to false too early.
      if (timer.current) clearTimeout(timer.current);

      setIsTyping(true);
      setState(newState);

      // If another update occur during this time, the next call will keep the typing flag to true.
      timer.current = setTimeout(() => {
        setStableState(newState);
        setIsTyping(false);
      }, holdFor);
    },
    [holdFor],
  );

  // Clear timer on unmount.
  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return [state, updateState, isTyping, stableState];
};
