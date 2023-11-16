import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

export interface TokenContextValue {
  token?: string | null;
  updateToken: (token: string | null) => void;
}

export const TokenContext = createContext<TokenContextValue>({
  token: null,
  updateToken: () => {
    console.warn("TokenContext.updateToken was called without a provider.");
  },
});

export const useToken = () => {
  return useContext(TokenContext);
};

export const TokenProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>();

  // Runs after SSR.
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const updateToken = useCallback((token: string | null) => {
    token == null ? localStorage.removeItem("token") : localStorage.setItem("token", token);
    setToken(token);
  }, []);

  return <TokenContext.Provider value={{ token, updateToken }}>{children}</TokenContext.Provider>;
};
