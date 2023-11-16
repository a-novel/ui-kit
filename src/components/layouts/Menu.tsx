import css from "./Menu.module.css";

import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from "react";

import { WithSticky, useSticky } from "@contexts";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /**
   * <span style="color: #32adff;">Content displayed in the menu section.</span>
   *
   * This content is separated from the default children prop.
   */
  menu: ReactNode;
  /**
   * <span style="color: #32adff;">Orientation of the menu.</span>
   *
   * Default to "horizontal".
   */
  orientation?: "horizontal" | "vertical";
}

/**
 * <span style="color: #32adff;">Generate a new layout with a menu.</span>
 *
 * Menu will cut the available screen space (either vertically or horizontally) to display a menu along the main
 * content.
 *
 * The children of a menu must either be a <span style="color: #ff9300;">\<Page\></span> component,
 * or another menu layout.
 */
export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { className, children, menu, orientation, style, ...props },
  externalRef,
) {
  const { offset } = useSticky();

  if (orientation === "vertical") {
    return (
      <div
        ref={externalRef}
        className={`${css.wrapper} ${css.vertical} ${className ?? ""}`}
        style={{ ...style, height: `calc(100vh - ${offset}px)` }}
        {...props}
      >
        <div style={{ top: `${offset}px` }} className={css.sticky}>
          {menu}
        </div>
        {children}
      </div>
    );
  }

  return (
    <WithSticky
      render={({ stickyRef }) => (
        <div
          ref={externalRef}
          className={`${css.wrapper} ${css.horizontal} ${className ?? ""}`}
          style={{ ...style, height: `calc(100vh - ${offset}px)` }}
          {...props}
        >
          <div ref={stickyRef} style={{ top: `${offset}px` }} className={css.sticky}>
            {menu}
          </div>
          {children}
        </div>
      )}
    />
  );
});

Menu.defaultProps = {
  orientation: "horizontal",
};
