import { FC, ReactNode } from "react";
import { ErrorPageProps, LoadingPageProps } from "../pages";
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
export declare const SessionChecker: FC<SessionCheckerProps>;
//# sourceMappingURL=Secure.d.ts.map