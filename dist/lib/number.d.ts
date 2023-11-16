/**
 * <span style="color: #32adff;">Represents a unit value for a shortened number.</span>
 *
 * A unit is a combination of a symbol, and a threshold for this symbol to be used.
 * For example, [1000, "k"] means that if the number is greater than or equal to 1000, the symbol "k" will be used.
 */
export type Unit = [threshold: number, symbol: string];
/**
 * Representation of metric <span style="color: #ffd600;">{@link Unit}</span>.
 */
export declare const METRIC_UNITS: Unit[];
/**
 * <span style="color: #32adff;">Trim large numbers using units.</span>
 *
 * If the number exceeds a certain threshold, it is divided by that threshold value then rounded.
 * A unit is added to the returned string, to account for the trimmed part.
 *
 * @example
 *  shortenNumber(1234) // "1k"
 */
export declare const shortenNumber: (n: number, units?: Unit[]) => string;
//# sourceMappingURL=number.d.ts.map