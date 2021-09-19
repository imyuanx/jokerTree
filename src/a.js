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
    switch(type){
        case "object":
            value = [];
            for(let key in obj){
                let oItem = obj[key];
                let type = getType(oItem);
                let astNodeItem = a(oItem, key, path + `["${key}"]`);
                value.push(astNodeItem);
            }
            break;
        case "array":
            value = [];
            obj.map((oItem, index) => {
                let astNodeItem = a(oItem, index, path + `[${index}]`);
                value.push(astNodeItem);
            });
            break;
        default:
            dataValue = obj + "";
            break;
    }
    
    let astNode = ast(type, key, path, dataValue, value);
    return astNode;
}

export default a;