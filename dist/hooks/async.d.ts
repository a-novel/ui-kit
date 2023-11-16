/**
 * <span style="color: #32adff;">Use state with async value loader.</span>
 *
 * Extract the value from the promise, and set it as the state value.
 */
export declare const useAsyncState: <T>(resolve: Promise<T>) => readonly [T | undefined, {
    readonly loading: boolean;
    readonly error: unknown;
}];
//# sourceMappingURL=async.d.ts.map