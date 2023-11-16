import{jsx as _jsx}from"react/jsx-runtime";import{createContext,useContext,useEffect,useState}from"react";export const WindowContext=createContext({});export const useWindow=()=>{const{window:ctxWindow,document:ctxDocument}=useContext(WindowContext);const[actualWindow,setActualWindow]=useState();const[actualDocument,setActualDocument]=useState();useEffect(()=>{setActualWindow(ctxWindow??window);setActualDocument(ctxDocument??document)},[ctxWindow,ctxDocument]);return{window:actualWindow,document:actualDocument}};export const WindowProvider=({children,window:window1,document:document1})=>{return _jsx(WindowContext.Provider,{value:{window:window1,document:document1},children:children})};
//# sourceMappingURL=window.js.map