import { Normalizer, getDisplayName } from "./string";

describe("Normalizer", () => {
  it("should not touch the string by default", () => {
    const normalizer = new Normalizer({});
    expect(normalizer.exec("foo")).toBe("foo");
  });

  it("should trim the string when trim is true", () => {
    const normalizer = new Normalizer({ trim: true });
    expect(normalizer.exec(" foo ")).toBe("foo");
  });

  it("should truncate the string when max is set", () => {
    const normalizer = new Normalizer({ max: 3 });
    expect(normalizer.exec("foobar")).toBe("foo");
    expect(normalizer.exec("fo")).toBe("fo");
  });

  it("should force the case of the string when forceCase is set", () => {
    const normalizerLower = new Normalizer({ forceCase: "lower" });
    expect(normalizerLower.exec("FOO")).toBe("foo");
    expect(normalizerLower.exec("foo")).toBe("foo");

    const normalizerUpper = new Normalizer({ forceCase: "upper" });
    expect(normalizerUpper.exec("FOO")).toBe("FOO");
    expect(normalizerUpper.exec("foo")).toBe("FOO");
  });

  it("should filter characters when filter is set", () => {
    const normalizer = new Normalizer({ filter: /[a-z]/ });
    expect(normalizer.exec("foo")).toBe("foo");
    expect(normalizer.exec("fo123o")).toBe("foo");
    expect(normalizer.exec("fo!@#o")).toBe("foo");
  });

  it("should properly handle separators", () => {
    const normalizer = new Normalizer({ separators: [" ", "-", "'"] });
    expect(normalizer.exec("foo")).toBe("foo");
    // Easier done in french.
    expect(normalizer.exec(" -Le cerf-- volant   s' envole -")).toBe("Le cerf-volant s'envole ");
  });

  it("should support multiple characters separators", () => {
    const normalizer = new Normalizer({ separators: ["' ", " ", "-", "'"] });
    expect(normalizer.exec("foo")).toBe("foo");
    expect(normalizer.exec("Jakob -O'  Neil")).toBe("Jakob O' Neil");
  });
});

describe("getDisplayName", () => {
  it("should return username, if defined", () => {
    expect(getDisplayName({ username: "Bootleg Jack", firstName: "Timothy", lastName: "Lawrence" })).toBe(
      "Bootleg Jack",
    );
  });

  it("should return real name, if defined", () => {
    expect(getDisplayName({ firstName: "Timothy", lastName: "Lawrence" })).toBe("Timothy Lawrence");
  });

  it("should return only the defined fields", () => {
    expect(getDisplayName({ firstName: "Timothy" })).toBe("Timothy");
    expect(getDisplayName({ lastName: "Lawrence" })).toBe("Lawrence");
  });

  it("should return empty string if no data is defined", () => {
    expect(getDisplayName({})).toBe("");
  });
});
