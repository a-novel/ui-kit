/**
 * Number of milliseconds in a second.
 */
export declare const MILLISECONDS_IN_SECOND = 1000;
/**
 * Number of milliseconds in a minute.
 */
export declare const MILLISECONDS_IN_MINUTE: number;
/**
 * Number of milliseconds in an hour.
 */
export declare const MILLISECONDS_IN_HOUR: number;
/**
 * Number of milliseconds in a day.
 */
export declare const MILLISECONDS_IN_DAY: number;
/**
 * <span style="color: #32adff;">Return the timestamp for midnight this same day.</span>
 *
 * Use the TZoffset to adjust for timezone.
 */
export declare const getMidnightTimeInTZ: (date: Date, tzOffset: number) => number;
/**
 * <span style="color: #32adff;">Returns the human number of days between two dates.</span>
 *
 * A 1-day difference means that <b>date 'b' happened anytime
 * between 00:00:00 and 23:59:59 on the day before date 'a'</b>, rather than a strict 24 hours difference.
 *
 * Midnight is defined in the date 'a' timezone, if both are different.
 */
export declare const daysDiff: (a: Date, b: Date) => number;
export interface DateTime {
    /**
     * The time associated to the date, formatted for proper display.
     */
    time: string;
    /**
     * <span style="color: #32adff;">The date associated to the date, formatted for proper display.</span>
     *
     * Only provided when necessary (if the date is not today).
     */
    date?: string;
}
/**
 * <span style="color: #32adff;">Return date and time values formatted for display.</span>
 *
 * The date value is optionally returned, if the date does not match the current day.
 */
export declare const displayTime: (sourceRaw: Date | number) => DateTime;
//# sourceMappingURL=datetime.d.ts.map