import { ReactNode, RefCallback, createContext, useCallback, useContext, useEffect, useState } from "react";

export interface StickyContextValue {
  offset: number;
}

export const StickyContext = createContext<StickyContextValue>({ offset: 0 });

export const useSticky = () => {
  return useContext(StickyContext);
};

export type withStickyRendererProps<R extends Element> = {
  stickyRef: RefCallback<R>;
};

export type withStickyProps<R extends Element> = {
  render: (props: withStickyRendererProps<R>) => ReactNode;
};

export const WithSticky = <R extends Element>({ render }: withStickyProps<R>) => {
  // https://stackoverflow.com/a/60476525/9021186
  const [elementRect, setElementRect] = useState<DOMRect>();
  const { offset: parentOffset } = useSticky();
  const [offset, setOffset] = useState(parentOffset);

  const handleRect = useCallback((node: R) => {
    setElementRect((node as Element)?.getBoundingClientRect());
  }, []);

  useEffect(() => {
    setOffset(parentOffset + (elementRect?.height ?? 0));
  }, [elementRect?.height, parentOffset]);

  return <StickyContext.Provider value={{ offset }}>{render({ stickyRef: handleRect })}</StickyContext.Provider>;
};
