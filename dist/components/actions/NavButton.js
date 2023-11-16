import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import css from"./NavButton.module.css";import{forwardRef}from"react";import{JSX}from"react/jsx-runtime";import NextLink from"next/link";export const NavButton=forwardRef(function NavButton({className,color,children,subText,disabled,active,align,...props},externalRef){return _jsxs("button",{disabled:disabled,ref:externalRef,className:`${css.button} ${disabled?css.disabled:""} ${css[align??"left"]} ${active?css.active:""} ${css[color??"default"]} ${className??""}`,...props,children:[_jsx("span",{className:css.main,children:children}),subText?_jsx("span",{className:css.sub,children:subText}):null]})});NavButton.defaultProps={align:"left"};export const NavLink=forwardRef(function NavLink({className,color,children,subText,disabled,align,active,...props},externalRef){return _jsxs(NextLink,{ref:externalRef,className:`${css.button} ${disabled?css.disabled:""} ${active?css.active:""} ${css[align??"left"]} ${css[color??"default"]} ${className??""}`,...props,children:[_jsx("span",{className:css.main,children:children}),subText?_jsx("span",{className:css.sub,children:subText}):null]})});NavLink.defaultProps={align:"left",active:false};
//# sourceMappingURL=NavButton.js.map