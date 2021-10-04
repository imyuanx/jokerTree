import domNode from "./domNode";

/**
 * @author YX
 * @desc create dom for prefix symbol
 * @param {Number} layer 
 */
function createPrefixDom(layer = 0) {
    let prefixText = "&emsp;".repeat(layer);
    let prefixDom = domNode("span");
    prefixDom.innerHTML = prefixText;
    return prefixDom;
}
export default createPrefixDom;