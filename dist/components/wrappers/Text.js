import{jsx as _jsx}from"react/jsx-runtime";import css from"./Text.module.css";import{forwardRef}from"react";export const Text=forwardRef(function Text({className,style,scale,visibility,color,bold,italic,align,...props},externalRef){return _jsx("p",{ref:externalRef,className:`
        ${css.text} 
        ${css[visibility??"primary"]}
        ${css[color??"default"]} 
        ${css[align??"left"]} 
        ${bold?css.bold:""} 
        ${italic?css.italic:""} 
        ${className??""}
      `,style:{...style,fontSize:scale==null?undefined:typeof scale==="number"?`${scale}rem`:scale},...props})});Text.defaultProps={visibility:"primary",align:"left"};export const TextInline=forwardRef(function Text({className,style,scale,visibility,color,bold,italic,align,ellipsis,...props},externalRef){return _jsx("span",{ref:externalRef,className:`
        ${css.text} 
        ${css[visibility??"primary"]}
        ${css[color??"default"]} 
        ${css[align??"left"]} 
        ${bold?css.bold:""} 
        ${italic?css.italic:""} 
        ${ellipsis?css.ellipsis:""} 
        ${className??""}
      `,style:{...style,fontSize:scale==null?undefined:typeof scale==="number"?`${scale}rem`:scale,textOverflow:ellipsis!=null&&typeof ellipsis==="string"?ellipsis:undefined},...props})});TextInline.defaultProps={visibility:"primary",align:"left"};export const TextHeading=forwardRef(function TextHeading({className,style,scale,visibility,color,bold,italic,align,ellipsis,level,...props},externalRef){const Tag=`h${level}`;return _jsx(Tag,{ref:externalRef,className:`
        ${css.text} 
        ${css[visibility??"primary"]}
        ${css[color??"default"]} 
        ${css[align??"left"]} 
        ${bold?css.bold:""} 
        ${italic?css.italic:""} 
        ${ellipsis?css.ellipsis:""} 
        ${className??""}
      `,style:{...style,fontSize:scale==null?undefined:typeof scale==="number"?`${scale}rem`:scale,textOverflow:ellipsis!=null&&typeof ellipsis==="string"?ellipsis:undefined},...props})});TextHeading.defaultProps={visibility:"primary",align:"left"};
//# sourceMappingURL=Text.js.map