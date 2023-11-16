import css from "./InlineButton.module.css";

import { ComponentProps, forwardRef } from "react";
import { JSX } from "react/jsx-runtime";

import NextLink from "next/link";

import { Color } from "@components/common";

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
export const InlineButton = forwardRef<HTMLButtonElement, InlineButtonProps>(function ButtonProps(
  { className, color, ...props },
  externalRef,
) {
  return (
    <button ref={externalRef} className={`${css.button} ${css[color ?? "default"]} ${className ?? ""}`} {...props} />
  );
});

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
export const InlineLink = forwardRef<HTMLAnchorElement, InlineLinkProps>(function InlineLink(
  { className, color, ...props },
  externalRef,
) {
  return (
    <NextLink ref={externalRef} className={`${css.button} ${css[color ?? "default"]} ${className ?? ""}`} {...props} />
  );
});
