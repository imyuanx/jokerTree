import domNode from "./domNode";

/**
 * @author YX
 * @desc create dom for expand symbol
 */
function createExpandDom(){
    let expandDom = domNode("button");
    expandDom.innerHTML = "+";
    expandDom.className = "expand-symbol";
    return expandDom;
}
export default createExpandDom;