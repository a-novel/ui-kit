import{jsx as _jsx}from"react/jsx-runtime";import{forwardRef}from"react";export const Separator=forwardRef(function Separator({size,orientation},externalRef){const cssSize=size?typeof size==="number"?`${size}rem`:size:"0";return _jsx("div",{ref:externalRef,style:{width:orientation==="horizontal"?cssSize:undefined,height:orientation==="vertical"?cssSize:undefined,flexShrink:0}})});Separator.defaultProps={orientation:"horizontal"};
//# sourceMappingURL=Separator.js.map