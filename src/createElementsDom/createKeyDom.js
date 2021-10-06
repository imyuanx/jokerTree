import domNode from "../domNode";

/**
 * @author YX
 * @desc create dom for key
 * @param {String} key 
 * @param {Number} layer 
 */
function createKeyDom(type, key, layer = 0){
    let keyText = layer == 0 ? "JSON": key;
    let keyDom = domNode("span");
    keyDom.innerHTML = keyText;
    keyDom.className = "key";
    if (type !== "object" && type !== "array") {
        keyDom.className += " alignLeft";
    }
    return keyDom;
}
export default createKeyDom;