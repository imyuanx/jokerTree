import domNode from "./domNode";

/**
 * @author YX
 * @param {Object}
 * @returns {Array}
 */
function createDom(astNode, layer = 0){
    let childDom = [];
    let dom = domNode("div", {
        "data-key": astNode.key,
        "data-path": astNode.path,
        "data-dataValue": astNode.dataValue,
    });
    dom.innerHTML = "&emsp;".repeat(layer);
    if (astNode.key === "") {
        dom.innerHTML += " + {} JSON" + astNode.key;
        for (const key in astNode.value) {
            if (Object.hasOwnProperty.call(astNode.value, key)) {
                const item = astNode.value[key];
                let childDomItem = createDom(item, layer + 1);
                childDom = [...childDom, ...childDomItem];
            }
        }
    } else if (astNode.type == "object") {
        dom.innerHTML += " + {} " + astNode.key;
        for (const key in astNode.value) {
            if (Object.hasOwnProperty.call(astNode.value, key)) {
                const item = astNode.value[key];
                let childDomItem = createDom(item, layer + 1);
                childDom = [...childDom, ...childDomItem];
            }
        }
    } else if (astNode.type == "array") {
        dom.innerHTML += " + [] " + astNode.key;
        astNode.value.map((item) => {
            let childDomItem = createDom(item, layer + 1);
            childDom = [...childDom, ...childDomItem];
        });
    } else {
        dom.innerHTML += "&emsp;" + astNode.key + " : " + astNode.value;
    }
    
    return [dom, ...childDom];
}
export default createDom;