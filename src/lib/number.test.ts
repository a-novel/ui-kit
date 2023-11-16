import { Unit, shortenNumber } from "./number";

describe("shortenNumber", () => {
  it("should return the number as string, if too small", () => {
    expect(shortenNumber(0)).toBe("0");
    expect(shortenNumber(20)).toBe("20");
    expect(shortenNumber(-20)).toBe("-20");
  });

  it("should return the correct unit", () => {
    expect(shortenNumber(2134)).toBe("2k");
    expect(shortenNumber(-2134)).toBe("-2k");
  });

  it("should floor numbers when rounded", () => {
    expect(shortenNumber(999999)).toBe("999k");
    expect(shortenNumber(-999999)).toBe("-999k");
  });

  it("should support large units", () => {
    expect(shortenNumber(123456789)).toBe("123m");
    expect(shortenNumber(-123456789)).toBe("-123m");
  });

  it("should work with custom units", () => {
    const JAPANESE_NUMERALS = [
      [1000000000000000, "京"],
      [1000000000000, "兆"],
      [100000000, "億"],
      [10000, "万"],
    ] as Unit[];

    expect(shortenNumber(0, JAPANESE_NUMERALS)).toBe("0");
    expect(shortenNumber(2345, JAPANESE_NUMERALS)).toBe("2345");
    expect(shortenNumber(-2345, JAPANESE_NUMERALS)).toBe("-2345");
    expect(shortenNumber(23456, JAPANESE_NUMERALS)).toBe("2万");
    expect(shortenNumber(-23456, JAPANESE_NUMERALS)).toBe("-2万");
    expect(shortenNumber(234567891, JAPANESE_NUMERALS)).toBe("2億");
    expect(shortenNumber(-234567891, JAPANESE_NUMERALS)).toBe("-2億");
  });
});
