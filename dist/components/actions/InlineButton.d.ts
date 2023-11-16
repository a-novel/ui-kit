import { ComponentProps } from "react";
import { JSX } from "react/jsx-runtime";
import NextLink from "next/link";
import { Color } from "../common";
import IntrinsicElements = JSX.IntrinsicElements;
export type InlineButtonProps = IntrinsicElements["button"] & {
    /**
     * <span style="color: #32adff;">Color of the button.</span>
     */
    color?: Color;
};
/**
 * <span style="color: #32adff;">Inline button for quick actions.</span>
 *
 * Inline buttons are the lowest hierarchy of buttons. They are used for quick actions, integrated directly within
 * components across the UI.
 */
export declare const InlineButton: import("react").ForwardRefExoticComponent<Omit<InlineButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export interface InlineLinkProps extends ComponentProps<typeof NextLink> {
    /**
     * <span style="color: #32adff;">Color of the button.</span>
     */
    color?: Color;
}
/**
 * <span style="color: #32adff;">Inline link for quick actions.</span>
 *
 * Inline buttons are the lowest hierarchy of buttons. They are used for quick actions, integrated directly within
 * components across the UI.
 *
 * This is the Link version of inline buttons.
 */
export declare const InlineLink: import("react").ForwardRefExoticComponent<Omit<InlineLinkProps, "ref"> & import("react").RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=InlineButton.d.ts.map