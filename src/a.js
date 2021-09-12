import ast from "./astnode";
/**
 * @author YX
 * @desc This function is used to create AST
 * @param {Number} layer node is located in the order
 * @param {String} path node is located in the path
 * @param {Object} object JSON object
 * @returns {Object|Object[Array]}
 */
function a(layer, path, object) {
    let domTree = [];
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const value = object[key];
            let domItem;
            let nodePath = path + "[\"" + key + "\"]";
            if (typeof value == "object") {
                let dataValue = JSON.stringify(value);
                let type = Array.isArray(value) ? "array" : "object";
                domItem = ast(key, a(layer + 1, nodePath, value), dataValue, type, layer, nodePath);
            } else {
                domItem = ast(key, value, value, typeof value, layer, nodePath);
            }
            domTree.push(domItem);
        }
    }
    if (layer == 0) {
        return ast("_root", domTree, JSON.stringify(domTree), "array", layer, "");
    }
    
    return domTree;
}

export default a;