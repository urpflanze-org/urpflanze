const parseFunction = {
	suffix: '$fn:',

	parse: (data: any): any => {
		return typeof data === 'function' ? parseFunction.suffix + data.toString() : data
	},

	unparse: (data: any): any => {
		return typeof data === 'string' && data[0] === parseFunction.suffix
			? eval(data.substr(parseFunction.suffix.length))
			: data
	},
}

export default parseFunction
