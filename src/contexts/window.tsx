import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";

export interface WindowContextValue {
  window?: Window;
  document?: Document;
}

export const WindowContext = createContext<WindowContextValue>({});

export const useWindow = () => {
  const { window: ctxWindow, document: ctxDocument } = useContext(WindowContext);

  // Protect from SSR.
  const [actualWindow, setActualWindow] = useState<Window>();
  const [actualDocument, setActualDocument] = useState<Document>();

  // Runs after SSR.
  useEffect(() => {
    setActualWindow(ctxWindow ?? window);
    setActualDocument(ctxDocument ?? document);
  }, [ctxWindow, ctxDocument]);

  return { window: actualWindow, document: actualDocument };
};

export const WindowProvider: FC<{ children: ReactNode; window: Window; document: Document }> = ({
  children,
  window,
  document,
}) => {
  return <WindowContext.Provider value={{ window, document }}>{children}</WindowContext.Provider>;
};
