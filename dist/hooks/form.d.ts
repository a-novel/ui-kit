/**
 * <span style="color: #32adff;">Adds a boolean typing status, that stays on for a short while everytime the value
 * is updated.</span>
 *
 * Typing state is held for a certain duration when the value changes, and each new modification resets the typing
 * status.
 *
 * You can control the duration of the typing state with an optional second parameter.
 */
export declare const useTypingState: <T>(initialState: T, holdFor?: number) => [T, (newState: T) => void, boolean, T];
//# sourceMappingURL=form.d.ts.map