export type FillFN<T> = (index: number, array: T[]) => T;

const isFillFN = <T>(fill: T | FillFN<T>): fill is FillFN<T> => typeof fill === "function";

/**
 * <span style="color: #32adff;">Generate a new <span style="color: #ffd600;">{@link Array}</span>, and fill it
 * automatically.</span>
 *
 * The fill parameter can be a function, that takes takes the index of the current element, and the array itself.
 */
export const newArray = <T>(length: number, fill: T | FillFN<T>): T[] => {
  const array = new Array<T>(length);
  for (let i = 0; i < length; i++) array[i] = isFillFN(fill) ? fill(i, array) : fill;
  return array;
};

/**
 * <span style="color: #32adff;">Convert a <span style="color: #ffd600;">{@link Set}</span> to a regular
 * <span style="color: #ffd600;">{@link Array}</span>.</span>
 *
 * Element order is preserved.
 */
export const setToArray = <T>(set: Set<T>): T[] => {
  const array: T[] = [];
  set.forEach((value) => array.push(value));
  return array;
};
