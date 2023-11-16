const isNode=node=>node!=null&&typeof node==="object"&&"nodeType"in node&&node.nodeType===Node.ELEMENT_NODE;const isMatchingNode=(node,nodes)=>nodes.some(ref=>ref&&(ref.contains(node)||ref===node));export const isInTarget=(event,options)=>{if(isNode(event.target)){if(options.exclude&&isMatchingNode(event.target,options.exclude))return false;if(options.allow&&!isMatchingNode(event.target,options.allow))return false}else if(!options.allowGlobalTarget){return false}return true};export const setRefs=(...setters)=>node=>{for(const setter of setters){if(setter==null)continue;else if(typeof setter==="function")setter(node);else Object.assign(setter,{current:node})}};
//# sourceMappingURL=dom.js.map