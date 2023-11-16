import css from "./DropDown.module.css";

import { CSSProperties, MouseEvent, ReactNode, Ref, forwardRef, useCallback, useMemo, useState } from "react";

import { NavButton, NavButtonProps } from "@components/actions/NavButton";
import { Container } from "@components/wrappers";
import { useClickAnywhere } from "@hooks";
import { isInTarget, setRefs } from "@lib";

export type DropDownProps = Omit<NavButtonProps, "active" | "onClick"> & {
  /**
   * <span style="color: #32adff;">The content of the drop-down menu.</span>
   */
  dropDownMenu: ReactNode;
  dropDownMenuRef?: Ref<HTMLDivElement>;
  /**
   * <span style="color: #32adff;">Where the drop down menu should appear.</span>
   *
   * Default to "bottom right".
   */
  float?: "top left" | "top right" | "bottom left" | "bottom right";
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, opened?: boolean) => void;
};

const computeDropDownMenuStyle = (float: DropDownProps["float"]) => {
  const [vertical, horizontal] = (float ?? "bottom right").split(" ");
  const style: CSSProperties = {};

  if (vertical === "bottom") {
    style.top = "100%";
    style.marginTop = "var(--menu-offset)";
    style.transformOrigin = "top";
  } else {
    style.bottom = "100%";
    style.marginBottom = "var(--menu-offset)";
    style.transformOrigin = "bottom";
  }

  if (horizontal === "right") {
    style.right = 0;
  } else {
    style.left = 0;
  }

  return style;
};

/**
 * <span style="color: #32adff;">A drop-down menu component.</span>
 */
export const DropDown = forwardRef<HTMLButtonElement, DropDownProps>(function DropDown(
  { children, className, dropDownMenu, dropDownMenuRef, onClick, float, ...props },
  externalRef,
) {
  const [opened, setOpened] = useState(false);
  const [buttonLocalRef, setButtonLocalRef] = useState<HTMLButtonElement | null>(null);
  const [dropDownMenuLocalRef, setDropDownMenuLocalRef] = useState<HTMLDivElement | null>(null);

  const excluded = useMemo(() => [buttonLocalRef], [buttonLocalRef]);
  const closeDropDownMenu = useCallback(() => setOpened(false), []);
  useClickAnywhere(closeDropDownMenu, excluded);

  return (
    <div className={`${css.dropDown} ${opened ? css.opened : css.closed} ${className ?? ""}`}>
      <NavButton
        active={opened}
        // @ts-ignore
        ref={setRefs(setButtonLocalRef, externalRef)}
        onClick={(e) => {
          if (isInTarget(e, { allow: [dropDownMenuLocalRef] })) return;
          setOpened(!opened);
          onClick?.(e, !opened);
        }}
        {...props}
      >
        {children}
      </NavButton>
      <Container
        orientation="vertical"
        background="blurry"
        border
        radius="normal"
        margin="normal"
        style={computeDropDownMenuStyle(float)}
        ref={setRefs(setDropDownMenuLocalRef, dropDownMenuRef)}
        className={css.dropDownMenu}
      >
        {dropDownMenu}
      </Container>
    </div>
  );
});

DropDown.defaultProps = {
  float: "bottom right",
};
