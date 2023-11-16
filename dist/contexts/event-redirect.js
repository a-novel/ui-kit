import{jsx as _jsx}from"react/jsx-runtime";import{createContext,useCallback,useContext}from"react";import{usePathname,useRouter}from"next/navigation";import{useLocalStorageState}from"@hooks";export const EventRedirectContext=createContext({savePathAndRedirect:()=>{console.warn("EventRedirectContext.savePathAndRedirect was called without a provider.")},loadSavedPath:()=>{console.warn("EventRedirectContext.loadSavedPath was called without a provider.")},loaded:false});export const useEventRedirect=()=>{return useContext(EventRedirectContext)};export const EventRedirectProvider=({children,redirectPath,fallbackPath})=>{const[_,setSavedPath,loaded]=useLocalStorageState("event-redirect-path",fallbackPath);const{push}=useRouter();const pathname=usePathname();const savePathAndRedirect=useCallback(()=>{setSavedPath(pathname);push(redirectPath)},[pathname,push]);const loadSavedPath=useCallback(()=>{setSavedPath(prevPath=>{push(prevPath||fallbackPath);return""})},[push]);return _jsx(EventRedirectContext.Provider,{value:{savePathAndRedirect,loadSavedPath,loaded},children:children})};
//# sourceMappingURL=event-redirect.js.map