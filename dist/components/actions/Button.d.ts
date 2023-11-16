import { ComponentProps, ReactNode } from "react";
import NextLink from "next/link";
import { Color } from "../common";
import IntrinsicElements = JSX.IntrinsicElements;
export type ButtonProps = IntrinsicElements["button"] & {
    /**
     * <span style="color: #32adff;">Color of the button.</span>
     */
    color?: Color;
    /**
     * <span style="color: #32adff;">Subtext of the button.</span>
     *
     * Sub text gives extra information / context to the action performed by the button.
     */
    subText?: ReactNode;
    /**
     * <span style="color: #32adff;">Disable the button.</span>
     */
    disabled?: boolean;
    /**
     * <span style="color: #32adff;">Make the button compact.</span>
     *
     * Make corner radius and padding less pronounced.
     */
    secondary?: boolean;
    /**
     * <span style="color: #32adff;">Align the text of the button.</span>
     *
     * Default value is "center".
     */
    align?: "left" | "center" | "right";
};
/**
 * <span style="color: #32adff;">Main button component.</span>
 */
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export type LinkProps = ComponentProps<typeof NextLink> & {
    /**
     * <span style="color: #32adff;">Color of the button.</span>
     */
    color?: Color;
    /**
     * <span style="color: #32adff;">Subtext of the button.</span>
     *
     * Sub text gives extra information / context to the destination of the link.
     */
    subText?: ReactNode;
    /**
     * <span style="color: #32adff;">Disable the button.</span>
     */
    disabled?: boolean;
    /**
     * <span style="color: #32adff;">Make the button compact.</span>
     *
     * Make corner radius and padding less pronounced.
     */
    secondary?: boolean;
    /**
     * <span style="color: #32adff;">Align the text of the button.</span>
     *
     * Default value is "center".
     */
    align?: "left" | "center" | "right";
};
/**
 <span style="color: #32adff;">Main link component.</span>
 */
export declare const Link: import("react").ForwardRefExoticComponent<Omit<LinkProps, "ref"> & import("react").RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=Button.d.ts.map