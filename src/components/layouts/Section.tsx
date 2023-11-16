import css from "./Section.module.css";

import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

import { useSticky } from "@contexts";

export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  /**
   * <span style="color: #32adff;">Grow the section to take up all available vertical space on screen.</span>
   *
   * The available vertical space it the free space in the layout, meaning the part of the screen that is not taken
   * by menus.
   *
   * If the content of the section overflows the available height, the section element will expand accordingly.
   */
  fullScreen?: boolean;
  /**
   * <span style="color: #32adff;">Disable the default vertical display.</span>
   *
   * By default, a section replicates the <span style="color: #ffd600;">{@link Page}</span> vertical display. You can
   * disable this behavior with this prop.
   */
  raw?: boolean;
}

/**
 * <span style="color: #32adff;">A section is an element of a <span style="color: #ffd600;">{@link Page}</span>.</span>
 *
 * A section is a container that separates different sections on the page. A section is a group of elements serving
 * a common purpose.
 *
 * By default, a section replicates the vertical display of a <span style="color: #ffd600;">{@link Page}</span>. You can
 * control this behavior with props.
 */
export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, raw, fullScreen, style, ...props },
  externalRef,
) {
  const { offset } = useSticky();

  return (
    <section
      ref={externalRef}
      className={`${css.section} ${fullScreen ? css.fullscreen : ""} ${raw ? "" : css.vertical} ${className ?? ""}`}
      style={{ minHeight: fullScreen ? `calc(100vh - ${offset}px)` : undefined, ...style }}
      {...props}
    />
  );
});
