export interface NormalizeParams {
  /**
   * <span style="color: #32adff;">Trim the string.</span>
   *
   * When set to true, the standard <span style="color: #ffd600;">{@link String.trim trim method}</span> is called on
   * the input.
   */
  trim?: boolean;
  /**
   * <span style="color: #32adff;">Define a list of characters / characters combination to be used as separators.</span>
   *
   * Any character defined as a separator will be automatically trimmed at the start of the string. Plus, only
   * <b>one consecutive separator</b> will be allowed between words.
   */
  separators?: string[];
  /**
   * <span style="color: #32adff;">Keep leading separators.</span>
   *
   * This allows separators to be present at the start of the string, for editing purpose.
   */
  keepLeadingSeparator?: boolean;
  /**
   * <span style="color: #32adff;">Sets a size limit for the string.</span>
   *
   * If the string length becomes larger than the value defined by max, the string will be truncated to the given
   * length.
   */
  max?: number;
  /**
   * <span style="color: #32adff;">Force the case of the string.</span>
   *
   * Characters that don't match the giving case will be converted automatically.
   */
  forceCase?: "lower" | "upper";
  /**
   * <span style="color: #32adff;">Filter the content of the input.</span>
   *
   * Only the characters / groups of characters matching the given regular expression will be kept.
   */
  filter?: RegExp | string;
}

/**
 * <span style="color: #32adff;">Apply advanced parsing to an input string.</span>
 *
 * Every available parsing operation is defined in the
 * <span style="color: #ffd600;">{@link NormalizeParams configuration object}</span>.
 */
export class Normalizer {
  private readonly params: Omit<NormalizeParams, "filter">;
  private readonly filter?: RegExp;

  constructor(params: NormalizeParams) {
    this.params = params;
    if (params.filter) this.filter = new RegExp(params.filter, "gu");
  }

  /**
   * <span style="color: #32adff;">Apply parser to an input string.</span>
   *
   * The output value is the result of executing all operations defined by the
   * <span style="color: #ffd600;">{@link NormalizeParams configuration object}</span> to this input.
   */
  exec = (value: string, params: Partial<NormalizeParams> = {}) => {
    const actualParams = { ...this.params, ...params };
    const actualFilter = actualParams.filter ? new RegExp(actualParams.filter, "gu") : this.filter;

    if (actualParams.trim) {
      value = value.trim();
    }

    if (actualParams.forceCase) {
      value = actualParams.forceCase === "lower" ? value.toLowerCase() : value.toUpperCase();
    }

    if (actualParams.separators) {
      let normalizedString = "";
      // Since we don't want separators at the start of the string by default, we act as if an "invisible" separator
      // is present.
      let lastCharacterWasSeparator = !actualParams.keepLeadingSeparator;

      while (value !== "") {
        const initialSeparator = actualParams.separators?.find((separator) => value.startsWith(separator)) ?? "";

        const addToNormalizedString =
          // Don't add anything if the previous character was a separator and this version of the string also starts
          // with a separator (no consecutive separators). Otherwise, add the separator, or the next character if this
          // version of the string does not start with a separator.
          lastCharacterWasSeparator && initialSeparator !== "" ? "" : initialSeparator || value[0];

        normalizedString += addToNormalizedString;

        value = value.slice(initialSeparator.length || 1);
        lastCharacterWasSeparator = initialSeparator !== "";
      }

      value = normalizedString;
    }

    // It is important to execute filter near the end, because its result can depend on previous conditions
    // (for example, if filter is set to only allow lowercase letters, then it can remove some unwanted
    // characters if forceCase is set to "lower").
    if (actualFilter) {
      value = (value.match(actualFilter) || []).join("");
    }

    // Execute max last, because previous conditions might have changed the length of the string.
    if (actualParams.max) {
      value = value.slice(0, this.params.max);
    }

    return value;
  };
}

/**
 * <span style="color: #32adff;">Normalized user data.</span>
 *
 * This generic representation is used to manage information display about a user.
 */
export interface UserData {
  /**
   * <span style="color: #32adff;">Alias name for a user.</span>
   *
   * This fake name is used to hide a user true identity, and should be <b>used for display whenever available</b>.
   */
  username?: string;
  firstName?: string;
  lastName?: string;
}

/**
 * <span style="color: #32adff;">Return the display name of a user.</span>
 *
 * Display name is computed from an <span style="color: #ffd600;">{@link UserData user object data}</span>.
 * It returns the value that should be used as a public username.
 */
export const getDisplayName = (user: UserData) => {
  if (user.username) {
    return user.username;
  }

  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  }

  if (user.firstName) {
    return user.firstName;
  }

  if (user.lastName) {
    return user.lastName;
  }

  return "";
};
