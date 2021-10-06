import domNode from "../domNode";
import { expandClickEventListener } from "../event";

/**
 * @author YX
 * @desc create dom for expand symbol
 */
function createExpandDom(dataValue){
    let expandDom = domNode("button");
    expandDom.innerHTML = "+";
    if (dataValue == "{}" || dataValue == "[]") {
        expandDom.innerHTML = "-";
    }
    expandDom.className = "expand-symbol";
    expandClickEventListener(expandDom);
    return expandDom;
}
export default createExpandDom;