import { MouseEventHandler, ReactNode, Ref } from "react";
export interface ModalProps {
    children: ReactNode;
    /**
     * <span style="color: #32adff;">Reference the container at the center of the page (not the wrapper).</span>
     */
    containerRef?: Ref<HTMLDivElement>;
    /**
     * <span style="color: #32adff;">Display the modal.</span>
     *
     * Set false to hide the modal, or true to show it.
     */
    opened: boolean;
    /**
     * <span style="color: #32adff;">Title of the modal.</span>
     */
    title: ReactNode;
    /**
     * <span style="color: #32adff;">Close the modal.</span>
     *
     * Use this action to set opened to false, along with other cleanup.
     */
    onClose: MouseEventHandler<HTMLButtonElement>;
}
/**
 * <span style="color: #32adff;">Show a modal over the application.</span>
 *
 * The modal requires a portal with the id <span style="color: #ff9300;">"modal"</span>, at the root of the application
 * (to avoid conflicts with z-index).
 */
export declare const Modal: import("react").ForwardRefExoticComponent<ModalProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Modal.d.ts.map