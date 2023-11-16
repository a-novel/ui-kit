import css from "./NavButton.module.css";

import { ComponentProps, ReactNode, forwardRef } from "react";
import { JSX } from "react/jsx-runtime";

import NextLink from "next/link";

import { Color } from "@components/common";

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
export const NavButton = forwardRef<HTMLButtonElement, NavButtonProps>(function NavButton(
  { className, color, children, subText, disabled, active, align, ...props },
  externalRef,
) {
  return (
    <button
      disabled={disabled}
      ref={externalRef}
      className={`${css.button} ${disabled ? css.disabled : ""} ${css[align ?? "left"]} ${active ? css.active : ""} ${
        css[color ?? "default"]
      } ${className ?? ""}`}
      {...props}
    >
      <span className={css.main}>{children}</span>
      {subText ? <span className={css.sub}>{subText}</span> : null}
    </button>
  );
});

NavButton.defaultProps = {
  align: "left",
};

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
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(function NavLink(
  { className, color, children, subText, disabled, align, active, ...props },
  externalRef,
) {
  return (
    <NextLink
      ref={externalRef}
      className={`${css.button} ${disabled ? css.disabled : ""} ${active ? css.active : ""} ${css[align ?? "left"]} ${
        css[color ?? "default"]
      } ${className ?? ""}`}
      {...props}
    >
      <span className={css.main}>{children}</span>
      {subText ? <span className={css.sub}>{subText}</span> : null}
    </NextLink>
  );
});

NavLink.defaultProps = {
  align: "left",
  active: false,
};
