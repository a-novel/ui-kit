import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import css from"./DropDown.module.css";import{forwardRef,useCallback,useMemo,useState}from"react";import{NavButton}from"@components/actions/NavButton";import{Container}from"@components/wrappers";import{useClickAnywhere}from"@hooks";import{isInTarget,setRefs}from"@lib";const computeDropDownMenuStyle=float=>{const[vertical,horizontal]=(float??"bottom right").split(" ");const style={};if(vertical==="bottom"){style.top="100%";style.marginTop="var(--menu-offset)";style.transformOrigin="top"}else{style.bottom="100%";style.marginBottom="var(--menu-offset)";style.transformOrigin="bottom"}if(horizontal==="right"){style.right=0}else{style.left=0}return style};export const DropDown=forwardRef(function DropDown({children,className,dropDownMenu,dropDownMenuRef,onClick,float,...props},externalRef){const[opened,setOpened]=useState(false);const[buttonLocalRef,setButtonLocalRef]=useState(null);const[dropDownMenuLocalRef,setDropDownMenuLocalRef]=useState(null);const excluded=useMemo(()=>[buttonLocalRef],[buttonLocalRef]);const closeDropDownMenu=useCallback(()=>setOpened(false),[]);useClickAnywhere(closeDropDownMenu,excluded);return _jsxs("div",{className:`${css.dropDown} ${opened?css.opened:css.closed} ${className??""}`,children:[_jsx(NavButton,{active:opened,ref:setRefs(setButtonLocalRef,externalRef),onClick:e=>{if(isInTarget(e,{allow:[dropDownMenuLocalRef]}))return;setOpened(!opened);onClick?.(e,!opened)},...props,children:children}),_jsx(Container,{orientation:"vertical",background:"blurry",border:true,radius:"normal",margin:"normal",style:computeDropDownMenuStyle(float),ref:setRefs(setDropDownMenuLocalRef,dropDownMenuRef),className:css.dropDownMenu,children:dropDownMenu})]})});DropDown.defaultProps={float:"bottom right"};
//# sourceMappingURL=DropDown.js.map