import domNode from "../domNode";

/**
 * @author YX
 * @desc create dom for nodes box
 */
function createNodesBoxDom(type, layer = null) {
    let nodeboxDom = domNode("div");
    nodeboxDom.className = "node-box";
    if (layer !== null && (type == "object" || type == "array")) nodeboxDom.className += " hide";
    return nodeboxDom;
}
export default createNodesBoxDom;