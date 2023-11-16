import { MILLISECONDS_IN_DAY, daysDiff, displayTime } from "./datetime";

describe("daysDiff", () => {
  it("should return 0 if both dates occur the same day", () => {
    const date1 = new Date("2020-01-01T23:59:59.999Z");
    const date2 = new Date("2020-01-01T00:00:00.000Z");

    expect(daysDiff(date1, date2)).toBe(0);
  });

  it("should return 1 if date2 occurs the day before date1", () => {
    const date1 = new Date("2020-01-01T00:00:00.000Z");
    const date2 = new Date("2019-12-31T23:59:59.000Z");
    expect(daysDiff(date1, date2)).toBe(1);
  });

  it("should properly handle timezones", () => {
    // Here, date2 is one day apart from date2, but because of timezone offsets it is actually the same day.
    const date1 = new Date("2020-01-02T07:00:00.000+01:00"); // 2020/01/02 7am in UTC+1
    const date2 = new Date("2020-01-01T21:00:00.000-08:00"); // 2020/01/02 6am in UTC+1

    expect(daysDiff(date1, date2)).toBe(0);
  });

  it("works locally", () => {
    const now = new Date();
    const yesterday = new Date(now.getTime() - MILLISECONDS_IN_DAY);
    const todayAtNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);

    expect(daysDiff(now, yesterday)).toBe(1);
    expect(daysDiff(now, todayAtNoon)).toBe(0);
  });
});

describe("displayTime", () => {
  it("should return time only if date is today", () => {
    const now = new Date();
    const todayTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 20, 0);

    const todayTimeString = todayTime.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      second: undefined,
    });

    expect(displayTime(todayTime)).toEqual({ time: todayTimeString });
  });

  it("should return date and time if date is not today", () => {
    const now = new Date();
    const todayTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 20, 0);
    const yesterdayTime = new Date(todayTime.getTime() - MILLISECONDS_IN_DAY);

    const yesterdayTimeString = yesterdayTime.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "numeric",
      second: undefined,
    });
    const yesterdayDateString = yesterdayTime.toLocaleDateString(undefined, {
      year: "numeric",
      day: "numeric",
      month: "long",
    });

    expect(displayTime(yesterdayTime)).toEqual({ date: yesterdayDateString, time: yesterdayTimeString });
  });
});
