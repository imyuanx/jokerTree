import domNode from "./domNode";
import createKeyDom from "./createKeyDom";
import createValueDom from "./createValueDom";
import createExpandDom from "./createExpandDom";
import createPrefixDom from "./createPrefixDom";
import createLinkDom from "./createLinkDom";
import createTypeDom from "./createTypeDom";

/**
 * @author YX
 * @desc create dom tree from ast
 * @param {Object}
 * @returns {Array}
 */
function createDomTree(astNode, layer = 0){
    let childDom = [];
    let domTree = domNode("div", {
        "data-key": astNode.key,
        "data-path": astNode.path,
        "data-dataValue": astNode.dataValue,
    });
    domTree.className = "row";

    let prefixDom = createPrefixDom(layer);
    domTree.appendChild(prefixDom);

    let keyDom = createKeyDom(astNode.key, layer);
    domTree.appendChild(keyDom);

    if (layer > 0 && astNode.type !== "object" && astNode.type !== "array") domTree.appendChild(createLinkDom());

    if (astNode.key === "" || astNode.type == "object" || astNode.type == "array") {
        let expandDom = createExpandDom();
        domTree.insertBefore(expandDom, keyDom);
        let typeDom = createTypeDom(astNode.type);
        domTree.insertBefore(typeDom, keyDom);

        if (astNode.type == "array") {
            astNode.value.map((item) => {
                let childDomItem = createDomTree(item, layer + 1);
                childDom = [...childDom, ...childDomItem];
            });
        } else {
            for (const key in astNode.value) {
                if (Object.hasOwnProperty.call(astNode.value, key)) {
                    const item = astNode.value[key];
                    let childDomItem = createDomTree(item, layer + 1);
                    childDom = [...childDom, ...childDomItem];
                }
            }
        }
    } else {
        let valueDom = createValueDom(astNode.value);
        domTree.appendChild(valueDom);
    }
    
    return [domTree, ...childDom];
}
export default createDomTree;