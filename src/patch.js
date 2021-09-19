import createDom from "./createDom";

/**
 * @author YX
 * @param {Document} container 
 * @param {Object} astTree 
 */
function patch(container, astTree){
    let domList = createDom(astTree);
    domList.map((item) => {
        container.append(item);
    });
}
export default patch;