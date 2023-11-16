import * as Sentry from "@sentry/nextjs";

/**
 * <span style="color: #32adff;">Returns true if the given value is an
 * <span style="color: #ffd600;">{@link Error}</span>.</span>
 *
 * Object that inherit from the <span style="color: #ffd600;">{@link Error}</span> prototype are considered as errors.
 */
export const isError = (error: unknown): error is Error =>
  error != null && typeof error === "object" && Error.prototype.isPrototypeOf(error);

/**
 * <span style="color: #32adff;">Returns true if the given value is an
 * <span style="color: #ffd600;">{@link APIError}</span>.</span>
 *
 * Object that inherit from the <span style="color: #ffd600;">{@link APIError}</span> prototype are considered as api
 * error.
 */
export const isAPIError = (error: unknown): error is APIError =>
  isError(error) && APIError.prototype.isPrototypeOf(error);

/**
 * <span style="color: #32adff;">Returns true if the given value is an
 * <span style="color: #ffd600;">{@link APIError}</span>, and its status code matches any of the ones provided.</span>
 *
 * Status code is the code returned from the faulty API call.
 */
export const isStatusError = (error: unknown, ...statuses: number[]): boolean =>
  isAPIError(error) && statuses.includes(error.status);

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
export class APIError extends Error {
  /**
   * <span style="color: #32adff;">Custom error name.</span>
   *
   * This can be used to discriminate the error type. This parameter is <b>safely overridable</b> from children classes.
   */
  name = "APIError";

  /**
   * <span style="color: #32adff;">HTTP status code of the response.</span>
   *
   * Status code is the code returned from the faulty API call.
   */
  status: number;

  private readonly responseText: Promise<string>;

  constructor(response: Response) {
    // Call the standard error constructor, with the status text as the message.
    // This text is a generic status text, the actual error content is only accessible through the promise returned
    // by the `text` method.
    super(response.statusText);

    this.status = response.status;
    this.responseText = response.text().catch(() => "no content");
  }

  /**
   * <span style="color: #32adff;">Returns the parsed response body.</span>
   *
   * The body is initially parsed in the constructor, to prevent multiple reads of the body.
   *
   * This method can be <b>safely called multiple times</b>.
   */
  text = (): Promise<string> => this.responseText;
}

/**
 * <span style="color: #32adff;">Process a generic error into a javascript
 * <span style="color: #ffd600;">{@link Error}</span> object.</span>
 *
 * Parses any type that could be thrown, including strings and non-error objects.
 */
export const parseError = (error: unknown): Error | null => {
  if (!error) return null;
  if (typeof error === "string") return new Error(error);
  return isError(error) ? error : new Error(JSON.stringify(error));
};

const joinErrorsReducer = (acc: Error | null, sourceError: unknown): Error | null => {
  const error = parseError(sourceError);

  if (error == null) {
    return acc;
  }

  if (acc == null) {
    return error;
  }

  error.cause = acc;
  return error;
};

/**
 * <span style="color: #32adff;">Join multiple errors into a single <span style="color: #ffd600;">{@link Error}</span>
 * object.</span>
 *
 * Errors are joined using their <span style="color: #ffd600;">{@link Error.cause}</span> property, and automatically
 * converted to objects using <span style="color: #ffd600;">{@link parseError}</span>.
 *
 * The parent error is the last one provided, while the first one is the deepest nested.
 */
export const joinErrors = (...errors: unknown[]): Error | null => errors.reduce(joinErrorsReducer, null);

const printWithIndent = (message: string): string =>
  message
    .split("\n")
    .map((line) => "\t" + line)
    .join("\n");

/**
 * <span style="color: #32adff;">Convert an error into a string message.</span>
 *
 * Allows errors to be pretty printed, with little to no information loss.
 *
 * It automatically handles the following types of errors:
 * - <span style="color: #ffd600;">{@link Error}</span>
 * - <span style="color: #ffd600;">{@link APIError}</span>
 */
export const printError = async (error: unknown): Promise<string> => {
  const parsedError = parseError(error);

  if (parsedError == null) {
    return "";
  }

  let message = parsedError.message;

  if (isAPIError(parsedError)) {
    const responseText = (message = `api call failed with status ${parsedError.status} (${message})`);
    const responseBody = await parsedError.text().catch((error) => `failed to parse response body: ${error}`);

    message = `${responseText}:\n${printWithIndent(responseBody)}`;
  }

  if (parsedError.cause != null) {
    message = `${message}\ncaused by:\n${printWithIndent(await printError(parsedError.cause))}`;
  }

  return `${parsedError.name || "Error"}: ${message}`;
};

/**
 * <span style="color: #32adff;">Capture an error.</span>
 *
 * The error is automatically dispatched to the correct system, depending on the current environment defined by
 * <span style="color: #ffd600;">{@link process.env.NODE_ENV}</span>.
 */
export const captureException = (error: unknown) => {
  switch (process.env.NODE_ENV) {
    case "development":
      printError(error).then(console.error);
      break;
    case "production":
      Sentry.captureException(error);
      break;
  }
};
