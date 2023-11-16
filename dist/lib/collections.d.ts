export type FillFN<T> = (index: number, array: T[]) => T;
/**
 * <span style="color: #32adff;">Generate a new <span style="color: #ffd600;">{@link Array}</span>, and fill it
 * automatically.</span>
 *
 * The fill parameter can be a function, that takes takes the index of the current element, and the array itself.
 */
export declare const newArray: <T>(length: number, fill: T | FillFN<T>) => T[];
/**
 * <span style="color: #32adff;">Convert a <span style="color: #ffd600;">{@link Set}</span> to a regular
 * <span style="color: #ffd600;">{@link Array}</span>.</span>
 *
 * Element order is preserved.
 */
export declare const setToArray: <T>(set: Set<T>) => T[];
//# sourceMappingURL=collections.d.ts.map