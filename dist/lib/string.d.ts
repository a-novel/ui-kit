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
export declare class Normalizer {
    private readonly params;
    private readonly filter?;
    constructor(params: NormalizeParams);
    /**
     * <span style="color: #32adff;">Apply parser to an input string.</span>
     *
     * The output value is the result of executing all operations defined by the
     * <span style="color: #ffd600;">{@link NormalizeParams configuration object}</span> to this input.
     */
    exec: (value: string, params?: Partial<NormalizeParams>) => string;
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
export declare const getDisplayName: (user: UserData) => string;
//# sourceMappingURL=string.d.ts.map