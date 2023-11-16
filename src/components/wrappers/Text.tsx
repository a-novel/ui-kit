import css from "./Text.module.css";

import { DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

import { Color, ColorIntensity } from "@components/common";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  /**
   * <span style="color: #32adff;">Scale the font size.</span>
   *
   * If a number is given, the font size will be scaled by that factor relatively to the absolute font size (rem).
   *
   * You can also pass any valid CSS length value.
   */
  scale?: number | string;
  /**
   * <span style="color: #32adff;">Visibility of the text.</span>
   *
   * "primary" means that the most vivid variant of the colors will be used, while "dark" will use more discrete
   * variants.
   * Use this parameter to play with the text emphasis.
   *
   * Default value is "primary".
   */
  visibility?: ColorIntensity;
  /**
   * <span style="color: #32adff;">Color of the text.</span>
   *
   * This parameter automatically combines with the <span style="color: #ffd600;">{@link visibility}</span> parameter,
   * to apply a preconfigured color to the text.
   *
   * Default value is "default".
   */
  color?: Color;
  /**
   * <span style="color: #32adff;">Boldness of the text.</span>
   *
   * If true, the text will be displayed in bold.
   */
  bold?: boolean;
  /**
   * <span style="color: #32adff;">Italic of the text.</span>
   *
   * If true, the text will be displayed in italic.
   */
  italic?: boolean;
  /**
   * <span style="color: #32adff;">Alignment of the text.</span>
   *
   * You can choose between "left", "center" and "right".
   *
   * Default value is "left".
   */
  align?: "left" | "center" | "right";
}

/**
 * <span style="color: #32adff;">Wrap a paragraph element.</span>
 *
 * It allows many of the standard css controls from React props, reducing the need for css files.
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(function Text(
  { className, style, scale, visibility, color, bold, italic, align, ...props },
  externalRef,
) {
  return (
    <p
      ref={externalRef}
      className={`
        ${css.text} 
        ${css[visibility ?? "primary"]}
        ${css[color ?? "default"]} 
        ${css[align ?? "left"]} 
        ${bold ? css.bold : ""} 
        ${italic ? css.italic : ""} 
        ${className ?? ""}
      `}
      style={{
        ...style,
        fontSize: scale == null ? undefined : typeof scale === "number" ? `${scale}rem` : scale,
      }}
      {...props}
    />
  );
});

Text.defaultProps = {
  visibility: "primary",
  align: "left",
};

export interface TextInlineProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  /**
   * <span style="color: #32adff;">Scale the font size.</span>
   *
   * If a number is given, the font size will be scaled by that factor relatively to the absolute font size (rem).
   *
   * You can also pass any valid CSS length value.
   */
  scale?: number | string;
  /**
   * <span style="color: #32adff;">Visibility of the text.</span>
   *
   * "primary" means that the most vivid variant of the colors will be used, while "dark" will use more discrete
   * variants.
   * Use this parameter to play with the text emphasis.
   *
   * Default value is "primary".
   */
  visibility?: ColorIntensity;
  /**
   * <span style="color: #32adff;">Color of the text.</span>
   *
   * This parameter automatically combines with the <span style="color: #ffd600;">{@link visibility}</span> parameter,
   * to apply a preconfigured color to the text.
   *
   * Default value is "default".
   */
  color?: Color;
  /**
   * <span style="color: #32adff;">Boldness of the text.</span>
   *
   * If true, the text will be displayed in bold.
   */
  bold?: boolean;
  /**
   * <span style="color: #32adff;">Italic of the text.</span>
   *
   * If true, the text will be displayed in italic.
   */
  italic?: boolean;
  /**
   * <span style="color: #32adff;">Alignment of the text.</span>
   *
   * You can choose between "left", "center" and "right".
   *
   * Default value is "left".
   */
  align?: "left" | "center" | "right";
  /**
   * <span style="color: #32adff;">Cut the text over a certain amount of characters.</span>
   *
   * Line breaks are disabled, as this property requires the text to be displayed on a single line.
   *
   * The value may be a boolean (uses the "ellipsis" css property), or any valid css value.
   */
  ellipsis?: boolean | string;
}

/**
 * <span style="color: #32adff;">Wrap an inline text element.</span>
 *
 * It allows many of the standard css controls from React props, reducing the need for css files.
 */
export const TextInline = forwardRef<HTMLSpanElement, TextInlineProps>(function Text(
  { className, style, scale, visibility, color, bold, italic, align, ellipsis, ...props },
  externalRef,
) {
  return (
    <span
      ref={externalRef}
      className={`
        ${css.text} 
        ${css[visibility ?? "primary"]}
        ${css[color ?? "default"]} 
        ${css[align ?? "left"]} 
        ${bold ? css.bold : ""} 
        ${italic ? css.italic : ""} 
        ${ellipsis ? css.ellipsis : ""} 
        ${className ?? ""}
      `}
      style={{
        ...style,
        fontSize: scale == null ? undefined : typeof scale === "number" ? `${scale}rem` : scale,
        textOverflow: ellipsis != null && typeof ellipsis === "string" ? ellipsis : undefined,
      }}
      {...props}
    />
  );
});

TextInline.defaultProps = {
  visibility: "primary",
  align: "left",
};

export interface TextHeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  /**
   * <span style="color: #32adff;">Scale the font size.</span>
   *
   * If a number is given, the font size will be scaled by that factor relatively to the absolute font size (rem).
   *
   * You can also pass any valid CSS length value.
   */
  scale?: number | string;
  /**
   * <span style="color: #32adff;">Visibility of the text.</span>
   *
   * "primary" means that the most vivid variant of the colors will be used, while "dark" will use more discrete
   * variants.
   * Use this parameter to play with the text emphasis.
   *
   * Default value is "primary".
   */
  visibility?: ColorIntensity;
  /**
   * <span style="color: #32adff;">Color of the text.</span>
   *
   * This parameter automatically combines with the <span style="color: #ffd600;">{@link visibility}</span> parameter,
   * to apply a preconfigured color to the text.
   *
   * Default value is "default".
   */
  color?: Color;
  /**
   * <span style="color: #32adff;">Boldness of the text.</span>
   *
   * If true, the text will be displayed in bold.
   */
  bold?: boolean;
  /**
   * <span style="color: #32adff;">Italic of the text.</span>
   *
   * If true, the text will be displayed in italic.
   */
  italic?: boolean;
  /**
   * <span style="color: #32adff;">Alignment of the text.</span>
   *
   * You can choose between "left", "center" and "right".
   *
   * Default value is "left".
   */
  align?: "left" | "center" | "right";
  /**
   * <span style="color: #32adff;">Cut the text over a certain amount of characters.</span>
   *
   * Line breaks are disabled, as this property requires the text to be displayed on a single line.
   *
   * The value may be a boolean (uses the "ellipsis" css property), or any valid css value.
   */
  ellipsis?: boolean | string;
  /**
   * <span style="color: #32adff;">Level of the heading.</span>
   *
   * Controls which tag is gonna be used to render the element.
   */
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * <span style="color: #32adff;">Wrap an inline text element.</span>
 *
 * It allows many of the standard css controls from React props, reducing the need for css files.
 */
export const TextHeading = forwardRef<HTMLHeadingElement, TextHeadingProps>(function TextHeading(
  { className, style, scale, visibility, color, bold, italic, align, ellipsis, level, ...props },
  externalRef,
) {
  const Tag = `h${level}` as any;

  return (
    <Tag
      ref={externalRef}
      className={`
        ${css.text} 
        ${css[visibility ?? "primary"]}
        ${css[color ?? "default"]} 
        ${css[align ?? "left"]} 
        ${bold ? css.bold : ""} 
        ${italic ? css.italic : ""} 
        ${ellipsis ? css.ellipsis : ""} 
        ${className ?? ""}
      `}
      style={{
        ...style,
        fontSize: scale == null ? undefined : typeof scale === "number" ? `${scale}rem` : scale,
        textOverflow: ellipsis != null && typeof ellipsis === "string" ? ellipsis : undefined,
      }}
      {...props}
    />
  );
});

TextHeading.defaultProps = {
  visibility: "primary",
  align: "left",
};
