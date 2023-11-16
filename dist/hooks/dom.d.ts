import { RefObject } from "react";
/**
 * <span style="color: #32adff;">Triggers the callback when user clicks anywhere on the page, except within the
 * defined targets.</span>
 *
 * Preconfigured portals are automatically excluded.
 */
export declare const useClickAnywhere: (callback: () => void, exclude?: (HTMLElement | null)[]) => void;
/**
 * <span style="color: #32adff;">Code to execute after a resize event was triggered on the target element.</span>
 *
 * The function receives the new dimensions and reference to the target element.
 */
export type ResizeCallback = ((width: number, height: number, target: Element) => void) | ((width: number, height: number) => void) | (() => void);
export interface ResizeParams {
    /**
     * <span style="color: #32adff;">An optional element to watch, instead of the whole window.</span>
     *
     * If given, callback will only be triggered if this element size changes.
     */
    element?: RefObject<any>;
    /**
     * <span style="color: #32adff;">This parameter control which axis to listen for resizing.</span>
     *
     * Target refers either to the window object, or the
     * <span style="color: #ffd600;">{@link element}</span> if given:
     *  - <span style="color: #ff9300;">"width"</span>: only trigger callback when the target width changes.
     *  - <span style="color: #ff9300;">"height"</span>: only trigger callback when the target height changes.
     *  - <span style="color: #ff9300;">"both"</span>: trigger callback when any dimension of the target changes.
     *
     * Default value is "both".
     */
    listen?: "width" | "height" | "both";
}
/**
 * <span style="color: #32adff;">Triggers a callback everytime the window, or a targeted element, is resized.</span>
 *
 * @example Basic usage
 * import { useResize } from "@anovel/uikit/hooks";
 *
 * const MyComponent = () => {
 *   const [width, setWidth] = useState(0);
 *   const [height, setHeight] = useState(0);
 *
 *   const onResize = useCallback(width: number, height: number) => {
 *     setWidth(width);
 *     setHeight(height);
 *   }, []);
 *
 *   useResize(onResize);
 *
 *   return (
 *     <div>
 *       Current body dimensions: {width} x {height}
 *     </div>
 *   );
 * }
 */
export declare const useResize: (callback: ResizeCallback, { element, listen }?: ResizeParams) => void;
//# sourceMappingURL=dom.d.ts.map