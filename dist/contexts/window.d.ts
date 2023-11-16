import { FC, ReactNode } from "react";
export interface WindowContextValue {
    window?: Window;
    document?: Document;
}
export declare const WindowContext: import("react").Context<WindowContextValue>;
export declare const useWindow: () => {
    window: Window | undefined;
    document: Document | undefined;
};
export declare const WindowProvider: FC<{
    children: ReactNode;
    window: Window;
    document: Document;
}>;
//# sourceMappingURL=window.d.ts.map