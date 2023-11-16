import { ComponentProps, ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import NextLink from "next/link";
import { Color } from "../common";
import IntrinsicElements = JSX.IntrinsicElements;
export type NavButtonProps = IntrinsicElements["button"] & {
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
     * <span style="color: #32adff;">Align the text of the button.</span>
     *
     * Default value is "center".
     */
    align?: "left" | "center" | "right";
    /**
     * <span style="color: #32adff;">Make the button active.</span>
     *
     * Default value is "false".
     */
    active?: boolean;
};
/**
 * <span style="color: #32adff;">Nav button component.</span>
 *
 * Nav buttons are used in nav menus to navigate the site.
 */
export declare const NavButton: import("react").ForwardRefExoticComponent<Omit<NavButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export type NavLinkProps = ComponentProps<typeof NextLink> & {
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
     * <span style="color: #32adff;">Align the text of the button.</span>
     *
     * Default value is "center".
     */
    align?: "left" | "center" | "right";
    /**
     * <span style="color: #32adff;">Make the link active.</span>
     *
     * Default value is "false".
     */
    active?: boolean;
};
/**
 * <span style="color: #32adff;">Nav link component.</span>
 *
 * Nav links are used in nav menus to navigate the site.
 */
export declare const NavLink: import("react").ForwardRefExoticComponent<Omit<NavLinkProps, "ref"> & import("react").RefAttributes<HTMLAnchorElement>>;
//# sourceMappingURL=NavButton.d.ts.map