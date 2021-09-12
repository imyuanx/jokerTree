function ast(key, value, dataValue, type, layer, path, open = false, parent = null) {
    return { key, value, dataValue, type, layer, path, open, parent };
}

export default ast;