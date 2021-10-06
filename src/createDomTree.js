import createNodesBoxDom from "./createElementsDom/createNodesboxDom";
import createNodeElementDom from "./createElementsDom/createNodeelementDom";

/**
 * @author YX
 * @desc create dom tree from ast
 * @param {Object}
 * @returns {Array}
 */
function createDomTree(astNode, layer = 0){
    let nodesBoxDom = createNodesBoxDom(astNode.type);
    let nodeElementDom;
    if (astNode.type == "object" || astNode.type == "array") {
        nodesBoxDom.appendChild(createNodeElementDom(astNode.key, astNode.path, astNode.dataValue, astNode.value, astNode.type, layer));
        nodeElementDom = createNodesBoxDom(astNode.type, layer);
        let layers = layer + 1;
        for (let i = 0; i < astNode.value.length; i++) {
            const element = astNode.value[i];
            nodeElementDom.appendChild(createDomTree(element, layers));
        }
    } else {
        nodeElementDom = createNodeElementDom(astNode.key, astNode.path, astNode.dataValue, astNode.value, astNode.type, layer);
    }
    nodesBoxDom.appendChild(nodeElementDom);
    
    return nodesBoxDom;
}
export default createDomTree;