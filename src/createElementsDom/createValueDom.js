import domNode from "../domNode";

/**
 * @author YX
 * @desc create dom for value
 * @param {String} value 
 */
function createValueDom(type, value){
    if (type == "object" || type == "array") return null;
    let valueDom = domNode("span");
    if (type == "string") {
        value = "\"" + value + "\"";
    }
    valueDom.innerHTML = value;
    valueDom.className = "value";
    return valueDom;
}
export default createValueDom;