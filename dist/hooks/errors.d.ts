/**
 * <span style="color: #32adff;">Trigger an exception capture every time the error is updated to a non-null value.</span>
 *
 * An optional condition can be added, to block unwanted captures.
 */
export declare const useCaptureException: (description: string, error: unknown, condition?: boolean) => void;
/**
 * <span style="color: #32adff;">Trigger an exception capture every time the description is updated to a non-null value.</span>
 *
 * An optional condition can be added, to block unwanted captures.
 */
export declare const useCaptureMessage: (description?: string, condition?: boolean) => void;
//# sourceMappingURL=errors.d.ts.map