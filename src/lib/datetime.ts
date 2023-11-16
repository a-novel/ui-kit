/**
 * Number of milliseconds in a second.
 */
export const MILLISECONDS_IN_SECOND = 1000;

/**
 * Number of milliseconds in a minute.
 */
export const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;

/**
 * Number of milliseconds in an hour.
 */
export const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;

/**
 * Number of milliseconds in a day.
 */
export const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;

/**
 * <span style="color: #32adff;">Return the timestamp for midnight this same day.</span>
 *
 * Use the TZoffset to adjust for timezone.
 */
export const getMidnightTimeInTZ = (date: Date, tzOffset: number) =>
  date.getTime() -
  date.getUTCMilliseconds() -
  MILLISECONDS_IN_SECOND * date.getUTCSeconds() -
  MILLISECONDS_IN_MINUTE * date.getUTCMinutes() -
  MILLISECONDS_IN_HOUR * date.getUTCHours() +
  // Accessors (getHours, getMinutes, etc) use local timezone, not the one defined by the date.
  // Above compute will give the time for midnight of that day in UTC. If we want midnight in the local timezone, we
  // need to add the offset.
  tzOffset * MILLISECONDS_IN_MINUTE;

/**
 * <span style="color: #32adff;">Returns the human number of days between two dates.</span>
 *
 * A 1-day difference means that <b>date 'b' happened anytime
 * between 00:00:00 and 23:59:59 on the day before date 'a'</b>, rather than a strict 24 hours difference.
 *
 * Midnight is defined in the date 'a' timezone, if both are different.
 */
export const daysDiff = (a: Date, b: Date): number =>
  // - If date 'b' occurs less than 24h after midnight of date 'a', then return 0 (day diff in range ]-1, 0]).
  // - if date 'b' occurs before midnight of date 'a', then return x (day diff in range ]0, +inf]).
  // - If date 'b' occurs more' than 24h after midnight of date 'a', then return -x (day diff in range [-inf, 0[).
  //
  // The or condition is to prevent -0 as a value.
  Math.ceil(
    (getMidnightTimeInTZ(a, a.getTimezoneOffset()) - getMidnightTimeInTZ(b, a.getTimezoneOffset())) /
      MILLISECONDS_IN_DAY,
  ) || 0;

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
export const displayTime = (sourceRaw: Date | number): DateTime => {
  const source = new Date(sourceRaw);
  const today = new Date();

  const isToday = daysDiff(source, today) === 0;

  const time = source.toLocaleTimeString(undefined, { hour: "numeric", minute: "numeric", second: undefined });
  if (isToday) {
    return { time };
  }

  const date = source.toLocaleDateString(undefined, { year: "numeric", day: "numeric", month: "long" });
  return { date, time };
};
