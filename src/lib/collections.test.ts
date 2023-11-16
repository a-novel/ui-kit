import { newArray, setToArray } from "./collections";

describe("newArray", () => {
  it("should fill with containers value", () => {
    expect(newArray(3, 1)).toEqual([1, 1, 1]);
  });

  it("should fill with dynamic value", () => {
    expect(newArray(3, (index) => index * 2)).toEqual([0, 2, 4]);
  });
});

describe("setToArray", () => {
  it("should convert a set to an array", () => {
    const set = new Set([1, 2, 3]);
    expect(setToArray(set)).toEqual([1, 2, 3]);
  });
});
