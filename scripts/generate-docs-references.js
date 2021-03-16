const path = require('path')
const { exec } = require('child_process')
const fs = require('fs')

const filename = path.resolve('./temp.json')
const dest_name = path.resolve('./docs-src/references.json')

exec(`npx typedoc --tsconfig ./tsconfig.json --json ${filename}`, (error, stdout, stderr) => {
	if (error) {
		console.log(`error: ${error.message}`)
		return
	}
	if (stderr) {
		console.log(`stderr: ${stderr}`)
		return
	}

	const current = generate(JSON.parse(fs.readFileSync(filename)))

	exec(
		`npx typedoc --tsconfig ./node_modules/@urpflanze/core/tsconfig.json --json ${filename}`,
		(error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`)
				return
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`)
				return
			}

			const core = generate(JSON.parse(fs.readFileSync(filename)))

			fs.unlinkSync(filename)

			const references = `${JSON.stringify([...core, current], null, '\t')}`
			fs.writeFileSync(dest_name, references)
		}
	)
})

function generate(typedocJSON) {
	const root = typedocJSON.children

	let result = []
	for (child of root) {
		const parsed = parseModule(child)

		result = [].concat(result, ...parsed.filter(d => !!d))
	}

	return result.sort((a, b) => a.order - b.order)
}

function parseModule(module) {
	let result = []

	if (module.flags && module.flags.isExported) {
		if (module.children) {
			for (item of module.children) {
				if (item.flags && item.flags.isExported) {
					const r = parse(item)
					if (r) {
						r.source = item.sources[0]
						result.push(r)
					}
				}
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
	if (parsedChildren.length > 0 && module.groups) {
		module.groups.forEach(group => {
			const categories = group.categories

			categories &&
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
		})
	}
}

function replacer(data) {
	if (data) {
		data = data.replace(/\[base_url\]/gim, '#/ref')
	}
	return data
}

function parse(item) {
	switch (item.kindString) {
		case 'Class':
			return parseClass(item)
		case 'Interface':
			return parseInterface(item)
		case 'Object literal':
			return parseObject(item)
		case 'Type alias':
			return parseType(item)
		case 'Enumeration':
			return parseEnum(item)
		case 'Function':
			return parseFunction(item)
	}
}

function findExamples(item) {
	const examples = []

	if (item.comment && item.comment.tags) {
		for (tag of item.comment.tags) {
			if (tag.tag === 'example') examples.push(tag.text)
		}
	} else if (item.signatures && item.signatures[0] && item.signatures[0].comment && item.signatures[0].comment.tags) {
		for (tag of item.signatures[0].comment.tags) {
			if (tag.tag === 'example') examples.push(tag.text)
		}
	}

	return examples.length === 0 ? undefined : examples
}

function parseDescription(item) {
	return item.comment ? replacer(item.comment.text || item.comment.shortText) : undefined
}

function findOrder(item, def = 9999) {
	if (item.comment && item.comment.tags) {
		for (tag of item.comment.tags) {
			if (tag.tag === 'order') {
				return parseFloat(tag.text)
			}
		}
	} else if (item.signatures && item.signatures[0] && item.signatures[0].comment && item.signatures[0].comment.tags) {
		for (tag of item.signatures[0].comment.tags) {
			if (tag.tag === 'order') return parseFloat(tag.text)
		}
	}

	return def
}

function parseFunction(item) {
	return { ...parseMethod(item), type: 'Function' }
}

function parseEnum(item) {
	const result = {
		name: item.name,
		type: 'Enumeration',
		source: item.sources[0].fileName,
		order: findOrder(item),
		examples: findExamples(item),
		description: parseDescription(item),
		members: item.children
			.map((member, index) => ({
				name: member.name,
				defaultValue: member.defaultValue,
				description: parseDescription(member),
				order: findOrder(member, index),
			}))
			.sort((a, b) => a.order - b.order),
	}

	return result
}

function parseType(item) {
	const result = {
		name: item.name,
		type: 'Type',
		order: findOrder(item),
		source: item.sources[0].fileName,
		description: parseDescription(item),
		examples: findExamples(item),
		parameter: parseProperty(item),
		typeParameters: item.typeParameter,
	}

	return result
}

function parseInterface(item) {
	const result = {
		type: 'Interface',
		name: item.name,
		order: findOrder(item),
		source: item.sources[0].fileName,
		extends: item && item.extendedTypes ? item.extendedTypes.map(extend => extend.name) : undefined,
		description: parseDescription(item),
		// properties: (item.children ? item.children.filter(c => !c.inheritedFrom).map(parseProperty) : []).sort(
		// 	(a, b) => a.order - b.order
		// ),
		properties: (item.children ? item.children.map(parseProperty) : []).sort((a, b) => a.order - b.order),
		typeParameters: item.typeParameter,
	}
	return result
}

function parseObject(item) {
	const result = {
		name: item.name,
		type: 'Object',
		order: findOrder(item),
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
		order: findOrder(item),
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
		result.properties = properties
			.filter(property => typeof property.inheritedFrom === 'undefined')
			.map(parseProperty)
			.sort((a, b) => a.order - b.order)
	}

	let methods = findKind(item, 'Method')
	if (methods && methods.length > 0) {
		result.methods = methods
			.filter(method => typeof method.inheritedFrom === 'undefined')
			.map(parseMethod)
			.sort((a, b) => a.order - b.order)
	}

	return result
}

function parseProperty(property) {
	const type = property.type

	if (type.types) {
		type.types = type.types.map(parseProperty)
	}

	const result = {
		name: property.name,
		description: parseDescription(property),
		type,
		value: property.value,
		defaultValue: property.defaultValue,
		declaration: property.declaration
			? property.declaration.signatures
				? parseMethod(property.declaration)
				: property.declaration
			: undefined,
		typeArguments: property.typeArguments,
		operator: property.operator,
		examples: findExamples(property),
		order: findOrder(property),
		target: property.target ? parseProperty(property.target) : undefined,
	}

	if (typeof property.flags !== 'undefined' && typeof property.flags.isOptional !== 'undefined')
		result.bOptional = property.flags.isOptional
	if (typeof property.flags !== 'undefined' && typeof property.flags.isPublic !== 'undefined')
		result.bPublic = property.flags.isPublic
	if (typeof property.flags !== 'undefined' && typeof property.flags.isProtected !== 'undefined')
		result.bProtected = property.flags.isProtected
	if (typeof property.flags !== 'undefined' && typeof property.flags.isPrivate !== 'undefined')
		result.bPrivate = property.flags.isPrivate
	if (typeof property.flags !== 'undefined' && typeof property.flags.isStatic !== 'undefined')
		result.bStatic = property.flags.isStatic
	if (typeof property.flags !== 'undefined' && typeof property.flags.isReadonly !== 'undefined')
		result.bReadonly = property.flags.isReadonly

	return result
}

function parseMethod(method) {
	if (method.signatures) {
		const return_type = method.signatures[0].type
		const result = {
			name: method.name,
			description: parseDescription(method.signatures[0]),
			parameters: method.signatures[0].parameters ? method.signatures[0].parameters.map(parseProperty) : [],
			examples: findExamples(method),
			typeParameter: method.signatures[0].typeParameter,
			return_type,
			order: findOrder(method),
			defaultValue: method.defaultValue,
		}

		if (typeof method.flags !== 'undefined' && typeof method.flags.isPublic !== 'undefined')
			result.bPublic = method.flags.isPublic
		if (typeof method.flags !== 'undefined' && typeof method.flags.isProtected !== 'undefined')
			result.bProtected = method.flags.isProtected
		if (typeof method.flags !== 'undefined' && typeof method.flags.isPrivate !== 'undefined')
			result.bPrivate = method.flags.isPrivate
		if (typeof method.flags !== 'undefined' && typeof method.flags.isStatic !== 'undefined')
			result.bStatic = method.flags.isStatic
		if (typeof method.flags !== 'undefined' && typeof method.flags.isReadonly !== 'undefined')
			result.bReadonly = method.flags.isReadonly

		return result
	}
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
