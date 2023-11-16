/// <reference types="react" />
export interface SeparatorProps {
    /**
     * <span style="color: #32adff;">The size of the separator.</span>
     *
     * Use this prop to change the size of the separator. If you use a number, the size will be in rem.
     * You can also use any valid CSS unit.
     */
    size?: number | string;
    /**
     * <span style="color: #32adff;">The orientation of the separator.</span>
     *
     * Default value is "horizontal".
     */
    orientation?: "horizontal" | "vertical";
}
export declare const Separator: import("react").ForwardRefExoticComponent<SeparatorProps & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=Separator.d.ts.map