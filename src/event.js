function expandClickEventListener(expandDom) {
    expandDom.addEventListener("click", (e) => {
        e.stopPropagation();
        let target = e.target;
        let childDom = target.parentElement.nextElementSibling;
        if (childDom.className.indexOf("hide") == -1) {
            target.innerHTML = "+";
            childDom.className = childDom.className + " hide";
        } else {
            target.innerHTML = "-";
            childDom.className = childDom.className.replace("hide", "");
        }
    });
}

function rowClickEventListener(rowDom, callback = () => {}) {
    rowDom.addEventListener("click", (e) => {
        e.stopPropagation();
        if (window.lastSelectNode !== undefined) {
            window.lastSelectNode.className = window.lastSelectNode.className.replace("row-select", "");
        }
        let target = e.currentTarget;
        window.lastSelectNode = target;
        if (target.className.indexOf("row-select") == -1) {
            target.className = target.className + " row-select";
        } else {
            target.className = target.className.replace("row-select", "");
        }
        let key = target.getAttribute("data-key");
        let path = target.getAttribute("data-path");
        let value = target.getAttribute("data-datavalue");
        callback(key, path, value);
    });
}
export { expandClickEventListener, rowClickEventListener };