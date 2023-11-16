import css from "@components/actions/Button.module.css";

import { ComponentProps, ReactNode, forwardRef } from "react";

import NextLink from "next/link";

import { Color } from "@components/common";

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
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, color, children, subText, disabled, secondary, align, ...props },
  externalRef,
) {
  return (
    <button
      disabled={disabled}
      ref={externalRef}
      className={`${css.button} ${disabled ? css.disabled : ""} ${css[align ?? "left"]} ${
        secondary ? css.secondary : ""
      } ${css[color ?? "default"]} ${className ?? ""}`}
      {...props}
    >
      <span className={css.main}>{children}</span>
      {subText ? <span className={css.sub}>{subText}</span> : null}
    </button>
  );
});

Button.defaultProps = {
  align: "left",
};

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
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { className, color, children, subText, disabled, secondary, align, ...props },
  externalRef,
) {
  return (
    <NextLink
      ref={externalRef}
      className={`${css.button} ${disabled ? css.disabled : ""} ${css[align ?? "left"]} ${
        secondary ? css.secondary : ""
      } ${css[color ?? "default"]} ${className ?? ""}`}
      {...props}
    >
      <span className={css.main}>{children}</span>
      {subText ? <span className={css.sub}>{subText}</span> : null}
    </NextLink>
  );
});

Link.defaultProps = {
  align: "left",
};
