/**
 * @author YX
 * @desc create HTMLElement dom
 * @param {String} sel element selector
 * @param {Object} options element attribute
 * @returns {HTMLElement}
 */
function domNode(sel = "div", options = {}){
    let dom = document.createElement(sel);
    for (const key in options) {
        if (Object.hasOwnProperty.call(options, key)) {
            const item = options[key];
            dom.setAttribute(key, item);
        }
    }
    return dom;
}
export default domNode;