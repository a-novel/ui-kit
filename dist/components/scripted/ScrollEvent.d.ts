import { FC } from "react";
export interface ScrollEventProps {
    /**
     * <span style="color: #32adff;">Function to call when scrolling into view.</span>
     */
    callback: IntersectionObserverCallback;
    /**
     * <span style="color: #32adff;">Whether the event should be enabled.</span>
     *
     * You can programmatically disabled the event by setting this prop to false.
     */
    enabled?: boolean;
    /**
     * <span style="color: #32adff;">Threshold of the event.</span>
     *
     * It is the distance between the edge of the screen and the element before the event is fired.
     *
     * Default value is 0. You can use a number (pixels), or any valid css unit.
     */
    threshold?: string | number;
}
/**
 * <span style="color: #32adff;">A scroll event component.</span>
 *
 * The event is fired when the element scrolls into view.
 */
export declare const ScrollEvent: FC<ScrollEventProps>;
//# sourceMappingURL=ScrollEvent.d.ts.map