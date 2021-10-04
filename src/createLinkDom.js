import domNode from "./domNode";

/**
 * @author YX
 * @desc create dom for link symbol
 */
function createLinkDom() {
    let linkDom = domNode("span");
    linkDom.innerHTML = "&ensp;:&ensp;";
    linkDom.className = "link-symbol";
    return linkDom;
}
export default createLinkDom;