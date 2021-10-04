import domNode from "./domNode";

/**
 * @author YX
 * @desc create dom for type symbol
 * @param {String} type 
 */
function createTypeDom(type) {
    let typeDom = domNode("span");
    if (type == "object") {
        typeDom.innerHTML = "{}";
    } else if (type == "array") {
        typeDom.innerHTML = "[]";
    }
    typeDom.className = "type-symbol";
    return typeDom;
}
export default createTypeDom;