import domNode from "../domNode";

/**
 * @author YX
 * @desc create dom for link symbol
 */
function createLinkDom(type) {
    if (type == "object" || type == "array") return null;
    let linkDom = domNode("span");
    linkDom.innerHTML = "：";
    linkDom.className = "link-symbol";
    return linkDom;
}
export default createLinkDom;
