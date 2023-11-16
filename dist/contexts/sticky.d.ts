import { ReactNode, RefCallback } from "react";
export interface StickyContextValue {
    offset: number;
}
export declare const StickyContext: import("react").Context<StickyContextValue>;
export declare const useSticky: () => StickyContextValue;
export type withStickyRendererProps<R extends Element> = {
    stickyRef: RefCallback<R>;
};
export type withStickyProps<R extends Element> = {
    render: (props: withStickyRendererProps<R>) => ReactNode;
};
export declare const WithSticky: <R extends Element>({ render }: withStickyProps<R>) => import("react").JSX.Element;
//# sourceMappingURL=sticky.d.ts.map