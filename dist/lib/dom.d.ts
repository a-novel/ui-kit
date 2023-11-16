import { Dispatch, Ref, SetStateAction, UIEvent } from "react";
export interface FilterTargetOptions {
    /**
     * <span style="color: #32adff;">Prevent some elements from being matched.</span>
     *
     * When an element is excluded, all its children are excluded as well.
     */
    exclude?: (HTMLElement | null)[];
    /**
     * <span style="color: #32adff;">Allow some elements to be matched.</span>
     *
     * When an element is allowed, all its children are allowed as well.
     *
     * If the element is a children of an <span style="color: #ffd600;">{@link FilterTargetOptions.exclude exclude}</span>
     * node, it will be ignored.
     */
    allow?: (HTMLElement | null)[];
    /**
     * <span style="color: #32adff;">Matches any click by default, even on nn-node targets.</span>
     *
     * This is useful for targeting any click by default on the page.
     */
    allowGlobalTarget?: boolean;
}
/**
 * <span style="color: #32adff;">Check if the target of an event matches a given filter.</span>
 */
export declare const isInTarget: <E extends Event | UIEvent<Element, globalThis.UIEvent>>(event: E, options: FilterTargetOptions) => boolean;
/**
 * <span style="color: #32adff;">Set multiple refs at once.</span>
 */
export declare const setRefs: <T>(...setters: (Ref<T> | Dispatch<SetStateAction<T | null>> | undefined)[]) => Ref<T>;
//# sourceMappingURL=dom.d.ts.map