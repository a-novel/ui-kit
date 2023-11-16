import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import { Color } from "../common";
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
export declare const InfoBox: import("react").ForwardRefExoticComponent<Omit<InfoBoxProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=InfoBox.d.ts.map