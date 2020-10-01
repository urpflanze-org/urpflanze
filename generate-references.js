const path = require('path')
const { exec } = require('child_process')
const fs = require('fs')

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
	}

	return result
}

function parseModule(module) {
	let result = []

	if (module.flags && module.flags.isExported) {
		if (module.children) {
			for (item of module.children) {
				item.flags && item.flags.isExported && result.push(parse(item))
			}
		}
	}

	applyModuleCategories(module, result)

	return result
}

function findModuleChildrenById(module, children_id) {
	for (child of module.children) if (child.id === children_id) return child
}

function applyModuleCategories(module, parsedChildren) {
	if (parsedChildren.length > 0 && module.groups && module.groups[0].categories) {
		const categories = module.groups[0].categories

		categories.forEach(category => {
			const categoryName = category.title
			for (item_to_apply of category.children) {
				const finded = findModuleChildrenById(module, item_to_apply)
				if (finded) {
					for (parsed of parsedChildren) {
						if (parsed.name === finded.name) {
							parsed.category = categoryName
							break
						}
					}
				}
			}
		})
	}
}

function parse(item) {
	switch (item.kindString) {
		case 'Class':
			return parseClass(item)
		case 'Interface':
			return parseInterface(item)
		case 'Function':
			return parseMethod(item)
		case 'Object literal':
			return parseObject(item)
		case 'Type alias':
			return parseType(item)
		case 'Enumeration':
			break
	}
}

function findExamples(item) {
	const examples = []

	if (item.comment && item.comment.tags) {
		for (tag of item.comment.tags) {
			if (tag.tag === 'example') examples.push(tag.text)
		}
	}

	return examples.length === 0 ? undefined : examples
}

function parseType(item) {
	const result = {
		name: item.name,
		type: 'Type',
		source: item.sources[0].fileName,
		description: parseDescription(item),
		examples: findExamples(item),
		parameter: parseProperty(item),
		typeParameters: parseTypeParameter(item),
	}

	return result
}

function parseInterface(item) {
	const result = {
		type: 'Interface',
		name: item.name,
		source: item.sources[0].fileName,
		extends: item && item.extendedTypes ? item.extendedTypes.map(extend => extend.name) : undefined,
		description: parseDescription(item),
		properties: item.children ? item.children.map(parseProperty) : [],
		typeParameters: parseTypeParameter(item),
	}
	return result
}

function parseTypeParameter() {
	if (item.typeParameter) {
		return item.typeParameter.map(t => t.name)
	}
}

function parseObject(item) {
	const result = {
		name: item.name,
		type: 'Object',
		source: item.sources[0].fileName,
		description: parseDescription(item),
		examples: findExamples(item),
	}

	let variables = findKind(item, 'Variable')
	if (variables && variables.length > 0) {
		result.variables = variables.map(parseProperty)
	}

	let functions = findKind(item, 'Function')
	if (functions && functions.length > 0) {
		result.functions = functions.map(parseMethod)
	}

	return result
}

function parseClass(item) {
	const result = {
		name: item.name,
		type: 'Class',
		source: item.sources[0].fileName,
		extends: item && item.extendedTypes ? item.extendedTypes.map(extend => extend.name) : undefined,
		description: parseDescription(item),
		examples: findExamples(item),
	}

	let constructor_ref = findKind(item, 'Constructor')

	if (constructor_ref && constructor_ref[0]) {
		if (
			constructor_ref[0].signatures &&
			constructor_ref[0].signatures.length > 0 &&
			constructor_ref[0].signatures[0].parameters
		) {
			result.constructor_ref = {
				parameters: constructor_ref[0].signatures[0].parameters.map(parseProperty),
				description: parseDescription(constructor_ref[0]),
			}
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

function parseProperty(property) {
	const type = property.type

	return {
		name: property.name,
		bPublic: property.flags ? property.flags.isPublic : false,
		bProtected: property.flags ? property.flags.isProtected : false,
		bPrivate: property.flags ? property.flags.isPrivate : false,
		bStatic: property.flags ? property.flags.isStatic : false,
		bReadonly: property.flags ? property.flags.isReadonly : false,
		description: parseDescription(property),
		type,
		defaultValue: property.defaultValue,
	}
}

function parseDescription(item) {
	return item.comment ? item.comment.text || item.comment.shortText : undefined
}

function parseMethod(method) {
	const return_type = method.signatures[0].type
	return {
		name: method.name,
		bPublic: method.flags ? method.flags.isPublic : false,
		bProtected: method.flags ? method.flags.isProtected : false,
		bPrivate: method.flags ? method.flags.isPrivate : false,
		bAbstract: method.flags ? method.flags.isAbstract : false,
		bStatic: method.flags ? method.flags.isStatic : false,
		bReadonly: method.flags ? method.flags.isReadonly : false,
		description: method.signatures[0].comment ? method.signatures[0].comment.shortText : undefined,
		parameters: method.signatures[0].parameters ? method.signatures[0].parameters.map(parseParameter) : [],
		examples: findExamples(method),
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
