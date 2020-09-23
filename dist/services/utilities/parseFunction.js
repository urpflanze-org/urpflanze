export default {
    parse: (data) => {
        if (typeof data === 'function') {
            return '$' + data.toString();
        }
        return data;
    },
    unparse: (data) => {
        if (typeof data === 'string' && data[0] === '$') {
            console.log('unparsefunction', data, [data.substr(1)]);
            return eval(data.substr(1));
        }
        return data;
    },
};
//# sourceMappingURL=parseFunction.js.map