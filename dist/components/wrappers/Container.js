import{jsx as _jsx}from"react/jsx-runtime";import css from"./Container.module.css";import{forwardRef}from"react";const computeSpacing=src=>{if(!src){return undefined}return typeof src==="number"?`${src}rem`:src.replaceAll("small","0.3rem").replaceAll("normal","0.6rem").replaceAll("large","0.9rem")};const computeDimension=src=>{if(!src){return undefined}switch(src){case"full":return"100%";default:return typeof src==="number"?`${src}rem`:src}};const computeRadius=src=>{if(!src){return undefined}return typeof src==="number"?`${src}rem`:src.replaceAll("small","0.3rem").replaceAll("normal","0.6rem").replaceAll("large","0.9rem")};const computeBorder=(src,bg)=>{if(src==null){return{}}if(src===true){src=["blue","red","green","gold","purple","orange"].includes(bg)?bg:"default"}switch(src){case"default":return{borderStyle:"solid",borderWidth:"thin",borderColor:"var(--color-border-box)"};case"blue":return{borderStyle:"solid",borderWidth:"thin",borderColor:"var(--blue)"};case"red":return{borderStyle:"solid",borderWidth:"thin",borderColor:"var(--red)"};case"green":return{borderStyle:"solid",borderWidth:"thin",borderColor:"var(--green)"};case"gold":return{borderStyle:"solid",borderWidth:"thin",borderColor:"var(--gold)"};case"purple":return{borderStyle:"solid",borderWidth:"thin",borderColor:"var(--purple)"};case"orange":return{borderStyle:"solid",borderWidth:"thin",borderColor:"var(--orange)"};default:return{}}};const computeBackground=src=>{if(!src){return{}}switch(src){case"blue":return{backgroundColor:"var(--blue-dark)"};case"red":return{backgroundColor:"var(--red-dark)"};case"green":return{backgroundColor:"var(--green-dark)"};case"gold":return{backgroundColor:"var(--gold-dark)"};case"purple":return{backgroundColor:"var(--purple-dark)"};case"orange":return{backgroundColor:"var(--orange-dark)"};case"plain":return{backgroundColor:"var(--color-background)"};default:return{}}};const computeAlign=src=>{let hAlign,vAlign;switch(src){case"top left":hAlign=css.hLeft;vAlign=css.vTop;break;case"center left":hAlign=css.hLeft;vAlign=css.vCenter;break;case"bottom left":hAlign=css.hLeft;vAlign=css.vBottom;break;case"top center":hAlign=css.hCenter;vAlign=css.vTop;break;case"center":hAlign=css.hCenter;vAlign=css.vCenter;break;case"bottom center":hAlign=css.hCenter;vAlign=css.vBottom;break;case"top right":hAlign=css.hRight;vAlign=css.vTop;break;case"center right":hAlign=css.hRight;vAlign=css.vCenter;break;case"bottom right":hAlign=css.hRight;vAlign=css.vBottom;break;default:return}return`${hAlign} ${vAlign}`};function ContainerForwarded({orientation,gap,padding,margin,spacing,align,width,height,wrap,tag:Tag,grow,zIndex,background,radius,border,selfAlign,className,style,...props},externalRef){const ActualTag=Tag??"div";const computedStyle=Object.assign({display:"flex",flexDirection:orientation==="vertical"?"column":"row",gap:computeSpacing(gap===true?spacing:gap),padding:computeSpacing(padding===true?spacing:padding),margin:computeSpacing(margin===true?spacing:margin),width:computeDimension(width),height:computeDimension(height),flexWrap:wrap?"wrap":"nowrap",flexGrow:grow?1:undefined,flexShrink:grow?undefined:0,boxSizing:"border-box",zIndex,justifyContent:selfAlign,borderRadius:computeRadius(radius),...computeBackground(background),...computeBorder(border,background)},style);const computedClassname=[computeAlign(align),background==="blurry"?css.blurry:undefined,className].filter(x=>!!x).join(" ");return _jsx(ActualTag,{"data-orientation":orientation,"data-bg":background,style:computedStyle,className:computedClassname,ref:externalRef,...props})}export const Container=forwardRef(ContainerForwarded);
//# sourceMappingURL=Container.js.map