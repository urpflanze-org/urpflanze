const parseFunction = {
    suffix: '$fn:',
    parse: (data) => {
        return typeof data === 'function' ? parseFunction.suffix + data.toString() : data;
    },
    unparse: (data) => {
        return typeof data === 'string' && data[0] === parseFunction.suffix
            ? eval(data.substr(parseFunction.suffix.length))
            : data;
    },
};
export default parseFunction;
//# sourceMappingURL=parseFunction.js.map