import ast from "./astNode";
import getType from "./getType";
/**
 * @author YX
 * @desc This function is used to create AST
 * @param {Object} obj JSON object
 * @param {String|Number} key 
 * @param {String} path 
 * @returns {Object}
 */
function a(obj, key, path) {
    let type = getType(obj);
    let dataValue = JSON.stringify(obj);
    let value = obj;
    if (type == "object") {
        value = [];
        for(let key in obj) {
            let oItem = obj[key];
            let astNodeItem = a(oItem, key, path + `["${key}"]`);
            value.push(astNodeItem);
        }
    } else if (type == "array") {
        value = [];
        obj.map((oItem, index) => {
            let astNodeItem = a(oItem, index, path + `[${index}]`);
            value.push(astNodeItem);
        });
    } else {
        dataValue = obj + "";
    }
    let astNode = ast(type, key, path, dataValue, value);
    return astNode;
}

export default a;