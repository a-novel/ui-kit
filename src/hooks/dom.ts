import { RefObject, useCallback, useEffect, useRef } from "react";

import { useWindow } from "@contexts";
import { isInTarget } from "@lib";

/**
 * <span style="color: #32adff;">Triggers the callback when user clicks anywhere on the page, except within the
 * defined targets.</span>
 *
 * Preconfigured portals are automatically excluded.
 */
export const useClickAnywhere = (callback: () => void, exclude?: (HTMLElement | null)[]) => {
  const { document } = useWindow();

  useEffect(() => {
    if (document == null) return;

    const handleClickOutside = (event: MouseEvent) => {
      const portals = Array.from(document.querySelectorAll("[data-portal]")) as HTMLElement[];

      const canExecute = isInTarget(event, {
        allowGlobalTarget: true,
        exclude: [...(exclude || []), ...portals],
      });

      if (canExecute) callback();
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [callback, exclude, document]);
};

/**
 * <span style="color: #32adff;">Code to execute after a resize event was triggered on the target element.</span>
 *
 * The function receives the new dimensions and reference to the target element.
 */
export type ResizeCallback =
  | ((width: number, height: number, target: Element) => void)
  | ((width: number, height: number) => void)
  | (() => void);

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
export const useResize = (callback: ResizeCallback, { element, listen }: ResizeParams = {}) => {
  // Keep track of the targets dimensions.
  const dimensions = useRef<{ width: number; height: number }>();

  const { document } = useWindow();

  const resizeObserverCallback = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { width, height } = entry.target.getBoundingClientRect();

        // Check whether the callback should be triggered or not (depending on the listen parameter).
        const isWidthDifferent = ["both", "width", undefined].includes(listen) && width !== dimensions.current?.width;
        const isHeightDifferent =
          ["both", "height", undefined].includes(listen) && height !== dimensions.current?.height;

        if (isWidthDifferent || isHeightDifferent) {
          // Update the dimensions reference, to use for comparison in future triggers.
          dimensions.current = { width, height };
          callback(width, height, entry.target);
        }
      }
    },
    [callback, listen],
  );

  useEffect(() => {
    if (document == null) return;

    const target = element?.current == null ? document.body : element.current;
    const resizeObserver = new ResizeObserver(resizeObserverCallback);

    resizeObserver.observe(target);
    return resizeObserver.disconnect;
  }, [element, resizeObserverCallback, document]);
};
