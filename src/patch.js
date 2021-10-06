import createDomTree from "./createDomTree";

/**
 * @author YX
 * @param {Document} container 
 * @param {Object} astTree 
 */
function patch(container, astTree){
    let domTree = createDomTree(astTree);
    container.append(domTree);
}
export default patch;