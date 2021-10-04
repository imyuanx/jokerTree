import createDomTree from "./createDomTree";

/**
 * @author YX
 * @param {Document} container 
 * @param {Object} astTree 
 */
function patch(container, astTree){
    let domList = createDomTree(astTree);
    domList.map((item) => {
        container.append(item);
    });
}
export default patch;