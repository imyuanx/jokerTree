/**
 * @author YX
 * @desc This method is used to obtain data types
 * @param {Any} data Need data for judgment type
 * @returns {String} data type
 */
function getType(data){
    let type = typeof data;
    if (type == "object") type = Array.isArray(data) ? "array" : "object";
    return type;
}
export default getType;