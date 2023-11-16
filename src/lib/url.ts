export interface MatchPathNameOptions {
  /**
   * <span style="color: #32adff;">If true, current pathname must perfectly match the expected one.</span>
   */
  exact?: boolean;
  /**
   * <span style="color: #32adff;">Exclude some paths from matching.</span>
   *
   * If a sub-path that would normally match should be excluded, add it to this list.
   */
  excludeSubPaths?: string[];
}

/**
 * <span style="color: #32adff;">Check if a given pathname is active.</span>
 *
 * Wildcards can be used in the expected pathname.
 *
 * By default, sub-paths that extend the expected pathname will match.
 * Use the <span style="color: #ffd600;">{@link MatchPathNameOptions}</span> to change this behavior.
 */
export const isPathnameActive = (pathName: string, expect: string, options?: MatchPathNameOptions) => {
  // Split paths, to allow for wildcards and ignore trailing / leading slashes.
  const pathBits = pathName.split("/").filter((x) => x !== "");
  const expectBits = expect.split("/").filter((x) => x !== "");

  if (options?.exact && pathBits.length !== expectBits.length) return false;

  for (const expectedBit of expectBits) {
    const pathBit = pathBits.shift();
    if (expectedBit === "*") continue;
    if (expectedBit !== pathBit) return false;
  }

  if (options?.excludeSubPaths) {
    for (const subPath of options.excludeSubPaths) {
      if (isPathnameActive(pathName, subPath)) return false;
    }
  }

  return true;
};
