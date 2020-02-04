function deref(f) {
    return Function.prototype.call.bind(f);
}

module.exports = deref;
