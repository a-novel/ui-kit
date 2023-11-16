import css from "./Icon.module.css";

import { CSSProperties, DetailedHTMLProps, HTMLAttributes, forwardRef } from "react";

export interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLDivElement> {
  /**
   * <span style="color: #32adff;">Scale the icon.</span>
   *
   * If a number is given, the icon will be scaled by that factor relatively to the local font size (em).
   *
   * You can also pass any valid CSS length value.
   */
  scale?: number | string;
  /**
   * <span style="color: #32adff;">Set the scaling method for the icon.</span>
   *
   * You can choose "horizontal" or "vertical" to determine on which dimension the
   * <span style="color: #ffd600;">{@link scale}</span> will apply.
   *
   * "square" is a special value, that sets both dimensions to the same value.
   */
  scalingMethod?: "vertical" | "horizontal" | "square";
}

/**
 * <span style="color: #32adff;">Wrap an SVG icon element.</span>
 *
 * This wrapper is used to control the behavior of inline SVG elements.
 * It automatically scales the icon depending on props.
 *
 * You can use this component with lottie icons. To ensure compatibility, make sure the following property is present
 * on the lottie player: <span style="color: #ff9300;">rendererSettings={{ viewBoxOnly: true }}</span>.
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(function IconWrapper(
  { className, style, scale, scalingMethod, ...props },
  externalRef,
) {
  return (
    <span
      ref={externalRef}
      data-icon={true}
      style={
        {
          "--scale": scale && (typeof scale === "number" ? `${scale}em` : scale),
          ...style,
        } as CSSProperties
      }
      className={`${css.wrapper} ${css[scalingMethod ?? "vertical"]} ${className ?? ""}`}
      {...props}
    />
  );
});

Icon.defaultProps = {
  scale: 1,
  scalingMethod: "vertical",
};
