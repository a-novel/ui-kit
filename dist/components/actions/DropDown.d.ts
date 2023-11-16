import { MouseEvent, ReactNode, Ref } from "react";
import { NavButtonProps } from "../actions/NavButton";
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
/**
 * <span style="color: #32adff;">A drop-down menu component.</span>
 */
export declare const DropDown: import("react").ForwardRefExoticComponent<Omit<DropDownProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=DropDown.d.ts.map