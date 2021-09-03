import ast from "./ast";
function h(layer, path, object) {
    let domTree = [];
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const value = object[key];
            let domItem;
            let nodePath = path + "[\"" + key + "\"]";
            if (typeof value == "object") {
                let dataValue = JSON.stringify(value);
                let type = Array.isArray(value) ? "array" : "object";
                domItem = ast(key, h(layer + 1, nodePath, value), dataValue, type, layer, nodePath);
            } else {
                domItem = ast(key, value, value, typeof value, layer, nodePath);
            }
            domTree.push(domItem);
        }
    }
    return domTree;
}

export default h;