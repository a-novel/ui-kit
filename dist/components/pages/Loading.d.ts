import { ReactNode } from "react";
export interface LoadingPageProps {
    /**
     * <span style="color: #32adff;">Alternative icon component to be displayed on the page.</span>
     *
     * You can use this component with lottie icons. To ensure compatibility, make sure the following property is present
     * on the lottie player: <span style="color: #ff9300;">rendererSettings={{ viewBoxOnly: true }}</span>.
     */
    icon?: ReactNode;
    /**
     * <span style="color: #32adff;">Content of the page.</span>
     *
     * Explain what is loading to the user.
     */
    content: ReactNode;
}
/**
 * <span style="color: #32adff;">A page to display while loading.</span>
 *
 * This component is designed to be used as part of NextJS loader handling. Since it uses a
 * <span style="color: #ffd600;">{@link Page}</span> component as a wrapper, you can also integrate it inside an
 * existing layout.
 */
export declare const LoadingPage: import("react").ForwardRefExoticComponent<LoadingPageProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Loading.d.ts.map