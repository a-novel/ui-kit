import { Dispatch, Ref, SetStateAction, UIEvent } from "react";

const isNode = (node: unknown): node is Node =>
  node != null && typeof node === "object" && "nodeType" in node && node.nodeType === Node.ELEMENT_NODE;

const isMatchingNode = (node: Node, nodes: (HTMLElement | null)[]): boolean =>
  nodes.some((ref) => ref && (ref.contains(node) || ref === node));

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
export const isInTarget = <E extends Event | UIEvent>(event: E, options: FilterTargetOptions) => {
  if (isNode(event.target)) {
    if (options.exclude && isMatchingNode(event.target, options.exclude)) return false;
    if (options.allow && !isMatchingNode(event.target, options.allow)) return false;
  } else if (!options.allowGlobalTarget) {
    return false;
  }

  return true;
};

/**
 * <span style="color: #32adff;">Set multiple refs at once.</span>
 */
export const setRefs =
  <T>(...setters: (Ref<T> | null | undefined | Dispatch<SetStateAction<T | null>>)[]): Ref<T> =>
  (node: T) => {
    for (const setter of setters) {
      if (setter == null) continue;
      else if (typeof setter === "function") setter(node);
      else Object.assign(setter, { current: node });
    }
  };
