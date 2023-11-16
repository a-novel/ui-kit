import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import errorLottie from"@assets/lottie/error.json";import notFoundLottie from"@assets/lottie/not-found.json";import{forwardRef}from"react";import{Page,Section}from"@components/layouts";import{Container,Icon,Text,TextHeading}from"@components/wrappers";import{Player}from"@lottiefiles/react-lottie-player";export const ErrorPage=forwardRef(function ErrorPage({icon,title,content},externalRef){return _jsx(Page,{main:true,ref:externalRef,children:_jsxs(Section,{fullScreen:true,style:{gap:"1rem",padding:"1rem"},children:[_jsx(Container,{orientation:"horizontal",selfAlign:"center",width:"full",children:_jsx(Icon,{scalingMethod:"horizontal",scale:10,children:icon??_jsx(Player,{autoplay:true,loop:true,src:errorLottie,rendererSettings:{viewBoxOnly:true}})})}),_jsxs(Container,{orientation:"vertical",width:"full",children:[_jsx(TextHeading,{level:1,scale:1.2,color:"red",align:"center",style:{width:"100%"},children:title}),_jsx(Text,{align:"center",style:{width:"100%"},children:content})]})]})})});export const NotFoundPage=forwardRef(function NotFoundPage({icon,title,content},externalRef){return _jsx(ErrorPage,{ref:externalRef,icon:icon??_jsx(Player,{autoplay:true,loop:true,src:notFoundLottie,rendererSettings:{viewBoxOnly:true}}),title:title,content:content})});
//# sourceMappingURL=Error.js.map