const parseFunction = {
	suffix: '$fn:',

	parse: (data: any): any => {
		return typeof data === 'function' && data.name !== 'SimpleAnimation' ? parseFunction.suffix + data.toString() : data
	},

	unparse: (data: any): any => {
		return typeof data === 'string' && data.indexOf(parseFunction.suffix) === 0
			? eval(data.substr(parseFunction.suffix.length))
			: data
	},
}

export default parseFunction
