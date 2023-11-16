import css from "./Container.module.css";

import { CSSProperties, ForwardedRef, RefAttributes, forwardRef } from "react";

import { Color } from "@components/common";

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
  align?:
    | "top left"
    | "center left"
    | "bottom left"
    | "top center"
    | "center"
    | "bottom center"
    | "top right"
    | "center right"
    | "bottom right";
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

const computeSpacing = (src: number | string | Spacing | undefined): string | undefined => {
  if (!src) {
    return undefined;
  }

  return typeof src === "number"
    ? `${src}rem`
    : src.replaceAll("small", "0.3rem").replaceAll("normal", "0.6rem").replaceAll("large", "0.9rem");
};

const computeDimension = (src: number | string | Scale | undefined): string | undefined => {
  if (!src) {
    return undefined;
  }

  switch (src) {
    case "full":
      return "100%";
    default:
      return typeof src === "number" ? `${src}rem` : src;
  }
};

const computeRadius = (src: number | string | Radius | undefined): string | undefined => {
  if (!src) {
    return undefined;
  }

  return typeof src === "number"
    ? `${src}rem`
    : src.replaceAll("small", "0.3rem").replaceAll("normal", "0.6rem").replaceAll("large", "0.9rem");
};

const computeBorder = (src: ContainerProps["border"], bg: ContainerProps["background"]): CSSProperties => {
  if (src == null) {
    return {};
  }

  // Automatically assign border color by default, depending on the background color.
  if (src === true) {
    src = ["blue", "red", "green", "gold", "purple", "orange"].includes(bg as string)
      ? (bg as ContainerProps["border"])
      : "default";
  }

  switch (src) {
    case "default":
      return {
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "var(--color-border-box)",
      };
    case "blue":
      return {
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "var(--blue)",
      };
    case "red":
      return {
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "var(--red)",
      };
    case "green":
      return {
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "var(--green)",
      };
    case "gold":
      return {
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "var(--gold)",
      };
    case "purple":
      return {
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "var(--purple)",
      };
    case "orange":
      return {
        borderStyle: "solid",
        borderWidth: "thin",
        borderColor: "var(--orange)",
      };
    default:
      return {};
  }
};

const computeBackground = (src: ContainerProps["background"]): CSSProperties => {
  if (!src) {
    return {};
  }

  switch (src) {
    case "blue":
      return { backgroundColor: "var(--blue-dark)" };
    case "red":
      return { backgroundColor: "var(--red-dark)" };
    case "green":
      return { backgroundColor: "var(--green-dark)" };
    case "gold":
      return { backgroundColor: "var(--gold-dark)" };
    case "purple":
      return { backgroundColor: "var(--purple-dark)" };
    case "orange":
      return { backgroundColor: "var(--orange-dark)" };
    case "plain":
      return { backgroundColor: "var(--color-background)" };
    default:
      return {};
  }
};

const computeAlign = (src: ContainerProps["align"]): string | undefined => {
  let hAlign, vAlign;

  switch (src) {
    case "top left":
      hAlign = css.hLeft;
      vAlign = css.vTop;
      break;
    case "center left":
      hAlign = css.hLeft;
      vAlign = css.vCenter;
      break;
    case "bottom left":
      hAlign = css.hLeft;
      vAlign = css.vBottom;
      break;
    case "top center":
      hAlign = css.hCenter;
      vAlign = css.vTop;
      break;
    case "center":
      hAlign = css.hCenter;
      vAlign = css.vCenter;
      break;
    case "bottom center":
      hAlign = css.hCenter;
      vAlign = css.vBottom;
      break;
    case "top right":
      hAlign = css.hRight;
      vAlign = css.vTop;
      break;
    case "center right":
      hAlign = css.hRight;
      vAlign = css.vCenter;
      break;
    case "bottom right":
      hAlign = css.hRight;
      vAlign = css.vBottom;
      break;
    default:
      return;
  }

  return `${hAlign} ${vAlign}`;
};

function ContainerForwarded<C extends ReactComponent = "div", T = unknown>(
  {
    orientation,
    gap,
    padding,
    margin,
    spacing,
    align,
    width,
    height,
    wrap,
    tag: Tag,
    grow,
    zIndex,
    background,
    radius,
    border,
    selfAlign,
    className,
    style,
    ...props
  }: ContainerProps<C>,
  externalRef: ForwardedRef<T>,
) {
  const ActualTag = (Tag ?? "div") as C;

  const computedStyle = Object.assign(
    {
      display: "flex",
      flexDirection: orientation === "vertical" ? "column" : "row",
      gap: computeSpacing(gap === true ? spacing : gap),
      padding: computeSpacing(padding === true ? spacing : padding),
      margin: computeSpacing(margin === true ? spacing : margin),
      width: computeDimension(width),
      height: computeDimension(height),
      flexWrap: wrap ? "wrap" : "nowrap",
      flexGrow: grow ? 1 : undefined,
      flexShrink: grow ? undefined : 0,
      boxSizing: "border-box",
      zIndex,
      justifyContent: selfAlign,
      borderRadius: computeRadius(radius),
      ...computeBackground(background),
      ...computeBorder(border, background),
    },
    style,
  );

  const computedClassname = [computeAlign(align), background === "blurry" ? css.blurry : undefined, className]
    .filter((x) => !!x)
    .join(" ");

  // Typescript is struggling with all the juggling types, so we do an exception and ignore
  // it for now.
  return (
    // @ts-ignore
    <ActualTag
      // @ts-ignore
      data-orientation={orientation}
      data-bg={background}
      // @ts-ignore
      style={computedStyle}
      // @ts-ignore
      className={computedClassname}
      // @ts-ignore
      ref={externalRef}
      // @ts-ignore
      {...props}
    />
  );
}

export const Container = forwardRef(ContainerForwarded) as <C extends ReactComponent = "div", T = unknown>(
  props: ContainerProps<C> & RefAttributes<T>,
) => ReturnType<typeof ContainerForwarded>;
