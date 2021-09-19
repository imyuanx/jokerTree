/**
 * @author YX
 * @param {String} type 
 * @param {String|Number} key 
 * @param {String} path 
 * @param {String} dataValue 
 * @param {String|Number|Array} value 
 * @returns {Object}
 */
function ast(type, key, path, dataValue, value) {
    return { type, key, path, dataValue, value};
}

export default ast;