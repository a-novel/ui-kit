/**
 * <span style="color: #32adff;">Returns true if the given value is an
 * <span style="color: #ffd600;">{@link Error}</span>.</span>
 *
 * Object that inherit from the <span style="color: #ffd600;">{@link Error}</span> prototype are considered as errors.
 */
export declare const isError: (error: unknown) => error is Error;
/**
 * <span style="color: #32adff;">Returns true if the given value is an
 * <span style="color: #ffd600;">{@link APIError}</span>.</span>
 *
 * Object that inherit from the <span style="color: #ffd600;">{@link APIError}</span> prototype are considered as api
 * error.
 */
export declare const isAPIError: (error: unknown) => error is APIError;
/**
 * <span style="color: #32adff;">Returns true if the given value is an
 * <span style="color: #ffd600;">{@link APIError}</span>, and its status code matches any of the ones provided.</span>
 *
 * Status code is the code returned from the faulty API call.
 */
export declare const isStatusError: (error: unknown, ...statuses: number[]) => boolean;
/**
 * <span style="color: #32adff;">Wraps a <span style="color: #ffd600;">{@link fetch}</span> call that returned a
 * non-OK response into a custom error.</span>
 *
 * The APIError class retains some properties from the <span style="color: #ffd600;">{@link Response fetch response}</span>,
 * such as the status code and the response body.
 *
 * @example
 *  const response = await fetch(...);
 *  if (!response.ok) throw new APIError(response);
 */
export declare class APIError extends Error {
    /**
     * <span style="color: #32adff;">Custom error name.</span>
     *
     * This can be used to discriminate the error type. This parameter is <b>safely overridable</b> from children classes.
     */
    name: string;
    /**
     * <span style="color: #32adff;">HTTP status code of the response.</span>
     *
     * Status code is the code returned from the faulty API call.
     */
    status: number;
    private readonly responseText;
    constructor(response: Response);
    /**
     * <span style="color: #32adff;">Returns the parsed response body.</span>
     *
     * The body is initially parsed in the constructor, to prevent multiple reads of the body.
     *
     * This method can be <b>safely called multiple times</b>.
     */
    text: () => Promise<string>;
}
/**
 * <span style="color: #32adff;">Process a generic error into a javascript
 * <span style="color: #ffd600;">{@link Error}</span> object.</span>
 *
 * Parses any type that could be thrown, including strings and non-error objects.
 */
export declare const parseError: (error: unknown) => Error | null;
/**
 * <span style="color: #32adff;">Join multiple errors into a single <span style="color: #ffd600;">{@link Error}</span>
 * object.</span>
 *
 * Errors are joined using their <span style="color: #ffd600;">{@link Error.cause}</span> property, and automatically
 * converted to objects using <span style="color: #ffd600;">{@link parseError}</span>.
 *
 * The parent error is the last one provided, while the first one is the deepest nested.
 */
export declare const joinErrors: (...errors: unknown[]) => Error | null;
/**
 * <span style="color: #32adff;">Convert an error into a string message.</span>
 *
 * Allows errors to be pretty printed, with little to no information loss.
 *
 * It automatically handles the following types of errors:
 * - <span style="color: #ffd600;">{@link Error}</span>
 * - <span style="color: #ffd600;">{@link APIError}</span>
 */
export declare const printError: (error: unknown) => Promise<string>;
/**
 * <span style="color: #32adff;">Capture an error.</span>
 *
 * The error is automatically dispatched to the correct system, depending on the current environment defined by
 * <span style="color: #ffd600;">{@link process.env.NODE_ENV}</span>.
 */
export declare const captureException: (error: unknown) => void;
//# sourceMappingURL=errors.d.ts.map