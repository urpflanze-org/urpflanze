const path = require('path')
const { exec } = require('child_process')
const fs = require('fs')
const util = require('util')

const filename = path.resolve('./temp.json')
const dest_name = path.resolve('./docs/assets/js/references.js')

exec(`typedoc --json ${filename}`, (error, stdout, stderr) => {
	if (error) {
		console.log(`error: ${error.message}`)
		return
	}
	if (stderr) {
		console.log(`stderr: ${stderr}`)
		return
	}

	const data = generate(JSON.parse(fs.readFileSync(filename)))

	// fs.unlinkSync(filename)

	const references = `window.references = ${JSON.stringify(data)}`
	fs.writeFileSync(dest_name, references)
})

function generate(typedocJSON) {
	const root = typedocJSON.children

	let result = []
	for (child of root) {
		const parsed = parseModule(child)

		result = [].concat(result, ...parsed.filter(d => !!d))

		// if (parsed[0] && parsed[0].name === 'ShapeBaseProps') {
		// }
	}

	return result
}

function parseModule(module) {
	const result = []

	if (module.children) {
		for (item of module.children) {
			result.push(parse(item))
		}
	}

	return result
}

function parse(item) {
	switch (item.kindString) {
		case 'Class':
			return parseClass(item)
		case 'Interface':
			return parseInterface(item)
		case 'Enumeration':
			break
	}
}

function parseClass(item) {
	const result = {
		name: item.name,
		type: 'Class',
		source: item.sources[0].fileName,
		extends: item && item.extendedTypes ? item.extendedTypes.map(extend => extend.name) : undefined,
	}

	let constructor = findKind(item, 'Constructor')

	if (constructor && constructor[0]) {
		result.description = constructor[0].comment ? constructor[0].comment.shortText : ''
		if (constructor[0].signatures && constructor[0].signatures.length > 0 && constructor[0].signatures[0].parameters) {
			result.constructor_parameters = constructor[0].signatures[0].parameters.map(parseProperty)
		}
	}

	let properties = findKind(item, 'Property')
	if (properties && properties.length > 0) {
		result.properties = properties.filter(property => typeof property.inheritedFrom === 'undefined').map(parseProperty)
	}

	let methods = findKind(item, 'Method')
	if (methods && methods.length > 0) {
		result.methods = methods.filter(method => typeof method.inheritedFrom === 'undefined').map(parseMethod)
	}

	return result
}

function parseInterface(item) {
	const result = {
		name: item.name,
		extends: item && item.extendedTypes ? item.extendedTypes.map(extend => extend.name) : undefined,
	}
	return result
}

function parseProperty(property) {
	const type = property.type.type === 'intrinsic' ? property.type.name : property.type

	return {
		name: property.name,
		description: property.comment ? property.comment.text || property.comment.shortText : undefined,
		type,
		defaultValue: property.defaultValue,
	}
}

function parseMethod(method) {
	const return_type =
		method.signatures[0].type.type === 'intrinsic' ? method.signatures[0].type.name : method.signatures[0].type
	return {
		name: method.name,
		description: method.signatures[0].comment ? method.signatures[0].comment.shortText : undefined,
		parameters: method.signatures[0].parameters ? method.signatures[0].parameters.map(parseParameter) : [],
		return_type,
	}
}

function parseParameter(parameter) {
	return parseProperty(parameter)
}

function findKind(module, type) {
	const result = []

	if (module && module.children) {
		for (child of module.children) {
			if (child.kindString === type) result.push(child)
		}
	}

	return result
}
