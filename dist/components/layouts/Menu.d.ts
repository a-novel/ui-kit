import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
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
export declare const Menu: import("react").ForwardRefExoticComponent<Omit<MenuProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Menu.d.ts.map