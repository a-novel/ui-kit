import { APIError, joinErrors } from "./errors";

/**
 * <span style="color: #32adff;">Returns a pre-configured <span style="color: #ffd600;">{@link RequestInit}</span>
 * object for all <span style="color: #ffd600;">{@link fetch}</span> requests.</span>
 *
 * Method and token are automatically added to the correct place.
 */
export const requestInit = (token?: string, method: string = "GET"): RequestInit => ({
  headers: { "Content-Type": "application/json", Authorization: token ?? "" },
  method,
  mode: "cors",
  credentials: "omit",
});

/**
 * <span style="color: #32adff;">Returns a pre-configured <span style="color: #ffd600;">{@link RequestInit}</span>
 * object for all <span style="color: #ffd600;">{@link fetch}</span> requests, with a JSON body.</span>
 *
 * Body is automatically stringified.
 */
export const postRequestInit = (data: any, method: string = "POST", token?: string): RequestInit => ({
  ...requestInit(token, method),
  body: JSON.stringify(data),
});

/**
 * <span style="color: #32adff;">Automatically parse a <span style="color: #ffd600;">{@link Response fetch response}</span>
 * into a JSON object, and throw an <span style="color: #ffd600;">{@link APIError}</span> if the response is not
 * <span style="color: #ffd600;">{@link Response.ok OK}</span>.<span style="color: #32adff;">
 *
 * This function panics if the response body is empty. To handle empty responses, use
 * <span style="color: #ffd600;">{@link handleOptionalResponse}</span>.
 */
export const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new APIError(response);
  }

  return response.json();
};

/**
 * <span style="color: #32adff;">Automatically parse a <span style="color: #ffd600;">{@link Response fetch response}</span>
 * into a JSON object, and throw an <span style="color: #ffd600;">{@link APIError}</span> if the response is not
 * <span style="color: #ffd600;">{@link Response.ok OK}</span>.<span style="color: #32adff;">
 *
 * Does not panic if the response body is empty. To prevent empty responses, use
 * <span style="color: #ffd600;">{@link handleResponse}</span>.
 */
export const handleOptionalResponse = async <T>(response: Response): Promise<T | undefined> => {
  if (!response.ok) {
    throw new APIError(response);
  }

  if (response.body == null) return undefined;

  const text = await response.text();
  if (text === "") return undefined;

  try {
    return JSON.parse(text);
  } catch (e) {
    throw joinErrors(`Failed to parse response body: ${text}`, e);
  }
};

/**
 * <span style="color: #32adff;">Callback that returns any value in a set of generic values.</span>
 *
 * The T type is an array of possible return values, for all the set callbacks.
 */
export type SwitchResponseCallback<T extends any[]> = (response: Response) => Promise<T[number]>;

export type SwitchResponse<T extends any[]> = SwitchResponseCallback<T> | T[number];

const isSwitchResponseCallback = <T extends any[]>(action: SwitchResponse<T>): action is SwitchResponseCallback<T> =>
  typeof action === "function";

/**
 * <span style="color: #32adff;">Handle <span style="color: #ffd600;">{@link Response fetch response}</span>
 * depending on the returned <span style="color: #ffd600;">{@link Response.status status code}</span>.</span>
 *
 * If the status codee does not match any of the provided actions,
 * an <span style="color: #ffd600;">{@link APIError}</span> is thrown.
 *
 * @example
 *  // Return value is automatically resolved as Promise<null | X | typeof DefaultValue>.
 *  const response = await fetch(...).then(handleSwitchResponse({
 *    404: null,
 *    200: (response) => response.json() as Promise<X>,
 *    204: DefaultValue,
 *  });
 */
export const handleSwitchResponse =
  <T extends any[]>(actions: Record<number, SwitchResponse<T>>) =>
  async (response: Response): Promise<T[number]> => {
    for (const [status, action] of Object.entries(actions)) {
      if (response.status === Number(status)) {
        return isSwitchResponseCallback(action) ? action(response) : action;
      }
    }

    throw new APIError(response);
  };

export type QueryParams = Record<string, any>;

/**
 * <span style="color: #32adff;">Generate a URL builder for a given API.</span>
 */
export const generateURLBuilder =
  (base: string) =>
  (path: string, query?: QueryParams): URL => {
    const url = new URL(path, base);

    Object.entries(query || {}).forEach(([key, value]) =>
      Array.isArray(value)
        ? value.forEach((subValue) => url.searchParams.append(key, `${subValue}`))
        : value != null && url.searchParams.append(key, `${value}`),
    );

    return url;
  };

/**
 * <span style="color: #32adff;">Generic return response for an infinite query result.</span>
 *
 * Having a standardized response helps building handlers for infinite queries.
 */
export interface SearchResult<T> {
  /**
   * Collection of elements returned by the last query call.
   */
  res: T[];
  /**
   * Total number of elements in the <b>whole collection</b>.
   */
  total: number;
}
