import { FC, ReactNode, useEffect } from "react";

import { ErrorPage, ErrorPageProps, LoadingPage, LoadingPageProps } from "@components/pages";
import { useEventRedirect } from "@contexts";

export interface SessionStatus {
  /**
   * <span style="color: #32adff;">Indicate session status is loading.</span>
   *
   * When returned, display a loading page with the given props.
   */
  loaderProps?: LoadingPageProps;
  /**
   * <span style="color: #32adff;">Indicate an error occurred while checking session.</span>
   *
   * When returned, display an error page with the given props.
   */
  errorProps?: ErrorPageProps;
  /**
   * <span style="color: #32adff;">Indicate session is authenticated.</span>
   *
   * Undefined means the session check has not completed. Once true or false, the session checker will decide on the
   * next step.
   */
  authenticated?: boolean;
}

export interface SessionCheckerProps {
  status: SessionStatus;
  children: ReactNode;
}

/**
 * <span style="color: #32adff;">Auto handle UI for pages that require authentication.</span>
 *
 * Switch between components depending on the status of the session.
 */
export const SessionChecker: FC<SessionCheckerProps> = ({ status, children }) => {
  const { savePathAndRedirect } = useEventRedirect();

  useEffect(() => {
    if (status.authenticated === false) {
      savePathAndRedirect();
    }
  }, [status.authenticated, savePathAndRedirect]);

  if (status.loaderProps) return <LoadingPage {...status.loaderProps} />;
  if (status.errorProps) return <ErrorPage {...status.errorProps} />;

  if (!status.authenticated) return null;

  return <>{children}</>;
};
