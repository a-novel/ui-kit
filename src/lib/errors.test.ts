import { APIError, isAPIError, isError, isStatusError, joinErrors, parseError, printError } from "./errors";

const SAMPLE_API_RESPONSE = () => new Response("ur mom", { status: 413, statusText: "so fat" });

describe("isError", () => {
  it("should not detect null or undefined as an error", () => {
    expect(isError(null)).toBe(false);
    expect(isError(undefined)).toBe(false);
  });

  it("should not detect primitives as error", () => {
    expect(isError(0)).toBe(false);
    expect(isError("")).toBe(false);
    expect(isError(true)).toBe(false);
    expect(isError({})).toBe(false);
    expect(isError([])).toBe(false);
  });

  it("should detect error", () => {
    const err = new Error("error 1");
    expect(isError(err)).toBe(true);
  });

  it("should detect derivative error types as error", () => {
    class MyError extends Error {}
    const error = new MyError("error 1");
    expect(isError(error)).toBe(true);
  });
});

describe("isAPIError", () => {
  it("should not detect null or undefined as an apiError", () => {
    expect(isAPIError(null)).toBe(false);
    expect(isAPIError(undefined)).toBe(false);
  });

  it("should not detect error", () => {
    const err = new Error("error 1");
    expect(isAPIError(err)).toBe(false);
  });

  it("should detect APIError", () => {
    const apiError = new APIError(SAMPLE_API_RESPONSE());
    expect(isAPIError(apiError)).toBe(true);
  });
});

describe("isStatusError", () => {
  it("should return true if the status matches the one of the APIError", () => {
    const apiError = new APIError(SAMPLE_API_RESPONSE());
    expect(isStatusError(apiError, 413)).toBe(true);
    expect(isStatusError(apiError, 404, 413)).toBe(true);
  });

  it("should return false if the status does not match the one of the APIError", () => {
    const apiError = new APIError(SAMPLE_API_RESPONSE());
    expect(isStatusError(apiError, 403, 404)).toBe(false);
  });

  it("should return false if the error is not an APIError", () => {
    expect(isStatusError("broken", 403, 404)).toBe(false);
  });
});

describe("APIError", () => {
  it("should be an error", async () => {
    const error = new APIError(SAMPLE_API_RESPONSE());
    expect(isError(error)).toBe(true);
  });

  it("should return correct status and response", async () => {
    const error = new APIError(SAMPLE_API_RESPONSE());
    expect(error.status).toBe(413);
    expect(error.message).toBe("so fat");
    expect(await error.text()).toBe("ur mom");
  });
});

describe("parseError", () => {
  it("should not convert falsy types", () => {
    expect(parseError(null)).toBe(null);
    expect(parseError(undefined)).toBe(null);
    expect(parseError("")).toBe(null);
  });

  it("should convert valid types to error", () => {
    const errorString = parseError("error 1");
    const errorJSON = parseError({ message: "error 1" });
    const errorError = parseError(new Error("error 1"));
    const errorDerivated = parseError(new APIError(SAMPLE_API_RESPONSE()));

    expect(errorString).toBeInstanceOf(Error);
    expect(errorString!.message).toBe("error 1");

    expect(errorJSON).toBeInstanceOf(Error);
    expect(errorJSON!.message).toBe('{"message":"error 1"}');

    expect(errorError).toBeInstanceOf(Error);
    expect(errorError!.message).toBe("error 1");

    expect(errorDerivated).toBeInstanceOf(Error);
    expect(errorDerivated).toBeInstanceOf(APIError);
    expect(errorDerivated!.message).toBe("so fat");
    expect((errorDerivated! as APIError).status).toBe(413);
  });
});

describe("joinErrors", () => {
  it("should join errors together", () => {
    const joined = joinErrors(
      "error 1",
      "",
      new Error("error 2"),
      null,
      undefined,
      new APIError(new Response("error 3", { status: 403, statusText: "forbidden" })),
    );

    expect(joined).toBeInstanceOf(APIError);
    expect(joined!.message).toBe("forbidden");
    expect(joined?.cause).toBeInstanceOf(Error);
    expect((joined?.cause as Error).message).toBe("error 2");
    expect((joined?.cause as Error).cause).toBeInstanceOf(Error);
    expect(((joined?.cause as Error).cause as Error).message).toBe("error 1");
    expect(((joined?.cause as Error).cause as Error).cause).toBeUndefined();
  });
});

describe("printError", () => {
  it("should join errors together", async () => {
    const joined = joinErrors(
      "error 1",
      "",
      new Error("error 2"),
      null,
      undefined,
      new APIError(new Response("error 3", { status: 403, statusText: "forbidden" })),
    );

    expect(await printError(joined)).toBe(
      `
APIError: api call failed with status 403 (forbidden):
\terror 3
caused by:
\tError: error 2
\tcaused by:
\t\tError: error 1
`.trim(),
    );
  });
});
