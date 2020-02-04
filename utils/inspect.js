const utilInspect = require('util').inspect;

function inspect(data, opts) {
    if (data instanceof Error) {
        var parts = Array.from(Object.entries(data), ([k, v]) => {
            return k + ': ' + utilInspect(v, { depth: 0 });
        });
        if (parts.length === 0) { return '[' + String(data) + ']'; }
        return '{ [' + String(data) + '] ' + parts.join(', ') + ' }';
    }

    opts = Object.assign({ compact: true }, opts);
    if (opts.depth !== undefined) {
        opts.depth--;
    }

    return utilInspect(data, opts);
}

module.exports = inspect;
