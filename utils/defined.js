function defined() {
    for (const v of arguments) {
        if (v !== undefined) {
            return v;
        }
    }
}

module.exports = defined;
