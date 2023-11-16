import { CSSProperties, ForwardedRef, RefAttributes } from "react";
import { Color } from "../common";
import IntrinsicElements = JSX.IntrinsicElements;
export type Spacing = "small" | "normal" | "large";
export type Radius = "small" | "normal" | "large";
export type Scale = "full";
type ReactComponent = keyof IntrinsicElements;
export type ContainerProps<C extends ReactComponent = ReactComponent> = Omit<IntrinsicElements[C], "ref"> & {
    /**
     * <span style="color: #32adff;">Orientation of the content.</span>
     *
     * Default to "bottom right".
     */
    orientation: "horizontal" | "vertical";
    /**
     * <span style="color: #32adff;">Gap between the children.</span>
     *
     * You can use a number (rem), or any valid css value. If true is given, then the value of
     * <span style="color: #ffd600;">{@link spacing}</span> will be used, if provided.
     */
    gap?: number | string | Spacing | true;
    /**
     * <span style="color: #32adff;">Padding around the children.</span>
     *
     * You can use a number (rem), or any valid css value. If true is given, then the value of
     * <span style="color: #ffd600;">{@link spacing}</span> will be used, if provided.
     */
    padding?: number | string | Spacing | true;
    /**
     * <span style="color: #32adff;">Margin around the container.</span>
     *
     * You can use a number (rem), or any valid css value. If true is given, then the value of
     * <span style="color: #ffd600;">{@link spacing}</span> will be used, if provided.
     */
    margin?: number | string | Spacing | true;
    /**
     * <span style="color: #32adff;">Generic spacing value.</span>
     *
     * If set, this value is automatically applied to <span style="color: #ffd600;">{@link gap}</span> and
     * <span style="color: #ffd600;">{@link padding}</span> if they are set to true.
     *
     * You can use a number (rem), or any valid css value.
     */
    spacing?: number | string | Spacing;
    /**
     * <span style="color: #32adff;">Width of the content.</span>
     *
     * Default to "left".
     */
    align?: "top left" | "center left" | "bottom left" | "top center" | "center" | "bottom center" | "top right" | "center right" | "bottom right";
    /**
     * <span style="color: #32adff;">Radius of the corners.</span>
     *
     * You can use a number (rem), or any valid css value.
     */
    radius?: number | string | Radius;
    /**
     * <span style="color: #32adff;">Width of the container.</span>
     *
     * You can use a number (rem), or any valid css value.
     */
    width?: number | string | Scale;
    /**
     * <span style="color: #32adff;">Height of the container.</span>
     *
     * You can use a number (rem), or any valid css value.
     */
    height?: number | string | Scale;
    /**
     * <span style="color: #32adff;">Wrap overflowing content.</span>
     */
    wrap?: boolean;
    /**
     * <span style="color: #32adff;">Custom tag to use for rendering the element.</span>
     *
     * It must match an existing HTML tag.
     */
    tag?: C;
    /**
     * <span style="color: #32adff;">Apply the flexbox grow property.</span>
     *
     * The parent must be a flexbox for this to work.
     */
    grow?: boolean;
    /**
     * <span style="color: #32adff;">ZIndex of the element.</span>
     */
    zIndex?: number;
    /**
     * <span style="color: #32adff;">Background of the element.</span>
     */
    background?: Color | "blurry" | "plain";
    /**
     * <span style="color: #32adff;">Border of the element.</span>
     *
     * If a boolean is given, border color is automatically matched with the background color.
     */
    border?: Color | "default" | true;
    /**
     * <span style="color: #32adff;">Align the content of the element.</span>
     */
    selfAlign?: CSSProperties["justifyContent"];
    className?: string;
    style?: CSSProperties;
};
declare function ContainerForwarded<C extends ReactComponent = "div", T = unknown>({ orientation, gap, padding, margin, spacing, align, width, height, wrap, tag: Tag, grow, zIndex, background, radius, border, selfAlign, className, style, ...props }: ContainerProps<C>, externalRef: ForwardedRef<T>): import("react").JSX.Element;
export declare const Container: <C extends keyof IntrinsicElements = "div", T = unknown>(props: Omit<IntrinsicElements[C], "ref"> & {
    /**
     * <span style="color: #32adff;">Orientation of the content.</span>
     *
     * Default to "bottom right".
     */
    orientation: "horizontal" | "vertical";
    /**
     * <span style="color: #32adff;">Gap between the children.</span>
     *
     * You can use a number (rem), or any valid css value. If true is given, then the value of
     * <span style="color: #ffd600;">{@link spacing}</span> will be used, if provided.
     */
    gap?: string | number | true | undefined;
    /**
     * <span style="color: #32adff;">Padding around the children.</span>
     *
     * You can use a number (rem), or any valid css value. If true is given, then the value of
     * <span style="color: #ffd600;">{@link spacing}</span> will be used, if provided.
     */
    padding?: string | number | true | undefined;
    /**
     * <span style="color: #32adff;">Margin around the container.</span>
     *
     * You can use a number (rem), or any valid css value. If true is given, then the value of
     * <span style="color: #ffd600;">{@link spacing}</span> will be used, if provided.
     */
    margin?: string | number | true | undefined;
    /**
     * <span style="color: #32adff;">Generic spacing value.</span>
     *
     * If set, this value is automatically applied to <span style="color: #ffd600;">{@link gap}</span> and
     * <span style="color: #ffd600;">{@link padding}</span> if they are set to true.
     *
     * You can use a number (rem), or any valid css value.
     */
    spacing?: string | number | undefined;
    /**
     * <span style="color: #32adff;">Width of the content.</span>
     *
     * Default to "left".
     */
    align?: "center" | "top left" | "center left" | "bottom left" | "top center" | "bottom center" | "top right" | "center right" | "bottom right" | undefined;
    /**
     * <span style="color: #32adff;">Radius of the corners.</span>
     *
     * You can use a number (rem), or any valid css value.
     */
    radius?: string | number | undefined;
    /**
     * <span style="color: #32adff;">Width of the container.</span>
     *
     * You can use a number (rem), or any valid css value.
     */
    width?: string | number | undefined;
    /**
     * <span style="color: #32adff;">Height of the container.</span>
     *
     * You can use a number (rem), or any valid css value.
     */
    height?: string | number | undefined;
    /**
     * <span style="color: #32adff;">Wrap overflowing content.</span>
     */
    wrap?: boolean | undefined;
    /**
     * <span style="color: #32adff;">Custom tag to use for rendering the element.</span>
     *
     * It must match an existing HTML tag.
     */
    tag?: C | undefined;
    /**
     * <span style="color: #32adff;">Apply the flexbox grow property.</span>
     *
     * The parent must be a flexbox for this to work.
     */
    grow?: boolean | undefined;
    /**
     * <span style="color: #32adff;">ZIndex of the element.</span>
     */
    zIndex?: number | undefined;
    /**
     * <span style="color: #32adff;">Background of the element.</span>
     */
    background?: Color | "blurry" | "plain" | undefined;
    /**
     * <span style="color: #32adff;">Border of the element.</span>
     *
     * If a boolean is given, border color is automatically matched with the background color.
     */
    border?: true | Color | "default" | undefined;
    /**
     * <span style="color: #32adff;">Align the content of the element.</span>
     */
    selfAlign?: CSSProperties["justifyContent"];
    className?: string | undefined;
    style?: CSSProperties | undefined;
} & RefAttributes<T>) => ReturnType<typeof ContainerForwarded>;
export {};
//# sourceMappingURL=Container.d.ts.map