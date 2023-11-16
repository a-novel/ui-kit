import css from "./InfoBox.module.css";

import InfoIcon from "@assets/icons/monochrome/info.svg";

import { ReactNode, forwardRef } from "react";
import { JSX } from "react/jsx-runtime";

import { Color } from "@components/common";
import { Container, Icon } from "@components/wrappers";

import IntrinsicElements = JSX.IntrinsicElements;

export type InfoBoxProps = IntrinsicElements["div"] & {
  /**
   * <span style="color: #32adff;">Icon of the info box.</span>
   *
   * The icon is displayed on the left of the info box.
   */
  icon?: ReactNode;
  /**
   * <span style="color: #32adff;">Color of the info box.</span>
   */
  color?: Color;
};

/**
 * <span style="color: #32adff;">Informative element that stands out on the UI.</span>
 *
 * InfoBox is an in-UI persistent notification. It is designed to stand out against the regular UI.
 *
 * InfoBox must be related to user actions or special events. They should be temporary as they visually
 * call the user towards them.
 */
export const InfoBox = forwardRef<HTMLDivElement, InfoBoxProps>(function InfoBox(
  { children, icon, color, className, ...props },
  externalRef,
) {
  return (
    <Container
      // @ts-ignore
      ref={externalRef}
      background={color}
      width="full"
      padding="normal normal normal calc(normal + 3.5rem)"
      gap
      spacing="normal"
      radius="normal"
      orientation="vertical"
      className={`${css.wrapper} ${className || ""}`}
      {...props}
    >
      <Icon scale={6} className={css.icon}>
        {icon ?? <InfoIcon />}
      </Icon>
      {children}
    </Container>
  );
});
