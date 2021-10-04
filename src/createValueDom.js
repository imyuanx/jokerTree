import domNode from "./domNode";

/**
 * @author YX
 * @desc create dom for value
 * @param {String} value 
 */
function createValueDom(value){
    let valueDom = domNode("span");
    valueDom.innerHTML = value;
    valueDom.className = "value";
    return valueDom;
}
export default createValueDom;