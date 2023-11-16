import { useEffect } from "react";

import { captureException, joinErrors } from "@lib";

/**
 * <span style="color: #32adff;">Trigger an exception capture every time the error is updated to a non-null value.</span>
 *
 * An optional condition can be added, to block unwanted captures.
 */
export const useCaptureException = (description: string, error: unknown, condition: boolean = true) => {
  useEffect(() => {
    if (!condition) return;
    if (error != null) captureException(joinErrors(description, error));
  }, [description, error, condition]);
};

/**
 * <span style="color: #32adff;">Trigger an exception capture every time the description is updated to a non-null value.</span>
 *
 * An optional condition can be added, to block unwanted captures.
 */
export const useCaptureMessage = (description?: string, condition: boolean = true) => {
  useEffect(() => {
    if (!condition) return;
    if (description != null) captureException(description);
  }, [description, condition]);
};
