import { ReactNode } from "react";
export interface ErrorPageProps {
    /**
     * <span style="color: #32adff;">Alternative icon component to be displayed on the page.</span>
     *
     * You can use this component with lottie icons. To ensure compatibility, make sure the following property is present
     * on the lottie player: <span style="color: #ff9300;">rendererSettings={{ viewBoxOnly: true }}</span>.
     */
    icon?: ReactNode;
    /**
     * <span style="color: #32adff;">Title of the page.</span>
     *
     * It should be a short text explaining immediately why the user is seeing this page.
     */
    title: ReactNode;
    /**
     * <span style="color: #32adff;">Content of the page.</span>
     *
     * Expand the title to clarify things for the user, and what actions it should take.
     */
    content: ReactNode;
}
/**
 * <span style="color: #32adff;">A page to display when an error occurs.</span>
 *
 * This component is designed to be used as part of NextJS error handling. Since it uses a
 * <span style="color: #ffd600;">{@link Page}</span> component as a wrapper, you can also integrate it inside an
 * existing layout.
 */
export declare const ErrorPage: import("react").ForwardRefExoticComponent<ErrorPageProps & import("react").RefAttributes<HTMLDivElement>>;
/**
 * <span style="color: #32adff;">A page to display when a not-found error occurs.</span>
 *
 * This component is designed to be used as part of NextJS error handling. Since it uses a
 * <span style="color: #ffd600;">{@link Page}</span> component as a wrapper, you can also integrate it inside an
 * existing layout.
 */
export declare const NotFoundPage: import("react").ForwardRefExoticComponent<ErrorPageProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Error.d.ts.map