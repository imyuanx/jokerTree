import domNode from "../domNode";
import createKeyDom from "./createKeyDom";
import createValueDom from "./createValueDom";
import createExpandDom from "./createExpandDom";
import createPrefixDom from "./createPrefixDom";
import createLinkDom from "./createLinkDom";
import createTypeDom from "./createTypeDom";
import { rowClickEventListener } from "../event";

/**
 * @author YX
 * @desc create dom for nodes box
 */
function createNodeElementDom(key, path, dataValue, value, type, layer) {
    let typeDom = null;
    let expandDom = null;
    let linkDom = createLinkDom(type);
    let valueDom = createValueDom(type, value);
    let preFixDom = createPrefixDom(layer);
    let keyDom = createKeyDom(type, key, layer);
    if (type == "object" || type == "array") {
        typeDom = createTypeDom(type);
        expandDom = createExpandDom(dataValue);
    }
    let nodeElementDom = domNode("div", {
        "data-key": key,
        "data-path": path,
        "data-datavalue": dataValue,
    });
    nodeElementDom.className = "row";
    nodeElementDom.appendChild(preFixDom);
    if (expandDom !== null) nodeElementDom.appendChild(expandDom);
    if (typeDom !== null) nodeElementDom.appendChild(typeDom);
    nodeElementDom.appendChild(keyDom);
    if (linkDom !== null) nodeElementDom.appendChild(linkDom);
    if (valueDom !== null) nodeElementDom.appendChild(valueDom);
    rowClickEventListener(nodeElementDom);
    return nodeElementDom;
}
export default createNodeElementDom;