import { isPathnameActive } from "./url";

describe("isPathnameActive", () => {
  it("should match 2 equal pathnames", () => {
    expect(isPathnameActive("/a/b/c", "/a/b/c")).toBe(true);
  });

  it("should ignore trailing slashes", () => {
    expect(isPathnameActive("/a/b/c/", "/a/b/c")).toBe(true);
    expect(isPathnameActive("/a/b/c", "/a/b/c/")).toBe(true);
  });

  it("should ignore leading slashes", () => {
    expect(isPathnameActive("a/b/c", "/a/b/c")).toBe(true);
    expect(isPathnameActive("/a/b/c", "a/b/c")).toBe(true);
  });

  it("should match sub paths", () => {
    expect(isPathnameActive("a/b/c/d/e", "/a/b/c")).toBe(true);
  });

  it("should match wildcards", () => {
    expect(isPathnameActive("a/b/c", "/a/*/c")).toBe(true);
  });

  it("should not match 2 different pathnames", () => {
    expect(isPathnameActive("/a/b/c", "/a/e/c")).toBe(false);
  });

  describe("options", () => {
    it("should not match sub paths when exact flag is true", () => {
      expect(isPathnameActive("a/b/c/d/e", "/a/b/c", { exact: true })).toBe(false);
    });

    it("should not match sub paths when excluded", () => {
      expect(isPathnameActive("a/b/c/d/e", "/a/b/c", { excludeSubPaths: ["/a/b/c/foo"] })).toBe(true);
      expect(isPathnameActive("a/b/c/foo", "/a/b/c", { excludeSubPaths: ["/a/b/c/foo"] })).toBe(false);
    });
  });
});
