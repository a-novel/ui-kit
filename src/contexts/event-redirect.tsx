import { FC, ReactNode, createContext, useCallback, useContext } from "react";

import { usePathname, useRouter } from "next/navigation";

import { useLocalStorageState } from "@hooks";

export interface EventRedirectContextValue {
  /**
   * <span style="color: #32adff;">Save the current location, and redirect to the path defined in the context.</span>
   *
   * This location can be later retrieved via <span style="color: #ffd600;">{@link loadSavedPath}</span>.
   */
  savePathAndRedirect: () => void;
  /**
   * <span style="color: #32adff;">Navigate to saved path, and remove it from memory.</span>
   *
   * If no path was saved using <span style="color: #ffd600;">{@link savePathAndRedirect}</span>, it will instead
   * redirect to the fallback path defined in the context.
   */
  loadSavedPath: () => void;
  /**
   * <span style="color: #32adff;">Indicate the hook is ready to be used.</span>
   *
   * It usually takes 1 React cycle for the hook to sync with local data.
   */
  loaded: boolean;
}

export const EventRedirectContext = createContext<EventRedirectContextValue>({
  savePathAndRedirect: () => {
    console.warn("EventRedirectContext.savePathAndRedirect was called without a provider.");
  },
  loadSavedPath: () => {
    console.warn("EventRedirectContext.loadSavedPath was called without a provider.");
  },
  loaded: false,
});

export const useEventRedirect = () => {
  return useContext(EventRedirectContext);
};

export interface EventRedirectProviderProps {
  children: ReactNode;
  /**
   * <span style="color: #32adff;">Fallback path for
   * <span style="color: #ffd600;">{@link EventRedirectContextValue.loadSavedPath loadSavedPath}</span>.</span>
   */
  fallbackPath: string;
  /**
   * <span style="color: #32adff;">Redirection path for
   * <span style="color: #ffd600;">{@link EventRedirectContextValue.savePathAndRedirect savePathAndRedirect}</span>.</span>
   */
  redirectPath: string;
}

/**
 * <span style="color: #32adff;">Perform temporary redirections, then fallback on the path user was viewing before
 * said redirection.</span>
 *
 * This helps to implement contextual actions, such as temporary login redirection when required, without loosing
 * the action performed by the user before the redirection.
 */
export const EventRedirectProvider: FC<EventRedirectProviderProps> = ({ children, redirectPath, fallbackPath }) => {
  const [_, setSavedPath, loaded] = useLocalStorageState("event-redirect-path", fallbackPath);

  const { push } = useRouter();
  const pathname = usePathname();

  const savePathAndRedirect = useCallback(() => {
    setSavedPath(pathname);
    push(redirectPath);
  }, [pathname, push]);

  const loadSavedPath = useCallback(() => {
    setSavedPath((prevPath) => {
      push(prevPath || fallbackPath);
      return "";
    });
  }, [push]);

  return (
    <EventRedirectContext.Provider value={{ savePathAndRedirect, loadSavedPath, loaded }}>
      {children}
    </EventRedirectContext.Provider>
  );
};
