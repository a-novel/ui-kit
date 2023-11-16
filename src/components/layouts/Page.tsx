import { forwardRef } from "react";
import { JSX } from "react/jsx-runtime";

import { Container } from "@components/wrappers";

import IntrinsicElements = JSX.IntrinsicElements;

export type PageProps = IntrinsicElements["div"] & {
  /**
   * <span style="color: #32adff;">Return a <span style="color: #ff9300;">\<main\></span> tag rather than a
   * generic <span style="color: #ff9300;">\<div\></span>.</span>
   *
   * <b>Only one page at a time</b> should be on screen with this prop.
   */
  main?: boolean;
};

/**
 * <span style="color: #32adff;">Pages are at the core of application presentation.</span>
 *
 * A Page component is a <b>vertical display</b>, that always take the <b>whole available space of the parent layout</b>.
 *
 * The Init component wraps the whole body content in a special page, that uses screen size as dimensions.
 *
 * If your page component does not wrap any menu layout, you should set the main prop to true.
 */
export const Page = forwardRef<HTMLDivElement, PageProps>(function Page({ main, ...props }, externalRef) {
  return (
    <Container
      orientation="vertical"
      tag={main ? "main" : "div"}
      grow
      width="full"
      // @ts-ignore
      ref={externalRef}
      {...props}
    />
  );
});
