import { FC, ReactNode } from "react";
export interface TokenContextValue {
    token?: string | null;
    updateToken: (token: string | null) => void;
}
export declare const TokenContext: import("react").Context<TokenContextValue>;
export declare const useToken: () => TokenContextValue;
export declare const TokenProvider: FC<{
    children: ReactNode;
}>;
//# sourceMappingURL=token.d.ts.map