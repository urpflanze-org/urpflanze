import { References } from '../references'

export function createPageName(reference) {
	let name = ''

	if (typeof reference.extends !== 'undefined') {
		// const extends_class = []
		// reference.extends.length > 0 && resolveExtends(reference.extends[0], extends_class)

		// name += '<small class="too">'
		// name += extends_class.map(extend => `<a href="#/ref/${extend}">${extend}</a>`).join(' -> ')
		// name += ' -> '
		// name += '</small>'

		name += `<small class="too">${reference.extends
			.map(extend => `<a href="#/ref/${extend}">${extend}</a>`)
			.join(', ')} -></small>`
	}

	if (reference.typeParameters && reference.typeParameters.length > 1) {
		console.warn(reference.typeParameters)
	}

	name +=
		reference.name +
		(reference.typeParameters
			? reference.typeParameters.length === 1
				? '&lt;' + reference.typeParameters[0].name + '&gt;'
				: ''
			: '')

	return name
}

function resolveExtends(parentClass, result) {
	if (References[parentClass].extends && References[parentClass].extends.length > 0) {
		resolveExtends(References[parentClass].extends[0], result)
	}
	result.push(parentClass)
}

export function resolveType(type) {
	if (type) {
		if (typeof type === 'string') {
			return type
		}

		if (type.name === 'Array' && type.typeArguments && type.typeArguments.length === 1) {
			return type.typeArguments[0].id
				? `Array&lt;<a href="#/ref/${type.typeArguments[0].name}">${type.typeArguments[0].name}</a>&gt;`
				: `Array&lt;${type.typeArguments[0].name}&gt;`
		}

		if (type.type === 'stringLiteral') return `'${type.value}'`

		if (type.type === 'intrinsic' || type.type === 'reference' || type.type === 'typeParameter')
			return (
				(References[type.name] ? `<a href="#/ref/${type.name}">${type.name}</a>` : type.name) +
				(type.typeArguments ? `&lt;${type.typeArguments.map(t => resolveType(t)).join(', ')}&gt;` : '')
			)

		if (type.type === 'reference' && typeof References[type.name] !== 'undefined') {
			return `<a href="#/ref/${type.name}">${type.name}</a>`
		}

		if (type.type === 'union') {
			return type.types.map(resolveType).join(' | ')
		}

		if (type.type === 'typeOperator') {
			return `${type.operator} ${resolveType(type.target)}`
		}

		if (type.type === 'reflection' && type.declaration) {
			console.log('ASDASDASASDD', type)
		}

		if (type.type === 'reflection' && type.declaration && type.declaration.parameters) {
			return `(${type.declaration.parameters
				.map(
					parameter =>
						`<span class="reference__method__property_name">${
							parameter.name
						}</span>: <span class="reference__method__property_type">${resolveType(parameter.type)}</span>`
				)
				.join(', ')}): ${resolveType(type.declaration.return_type)}`
		}

		if (
			type.type === 'reflection' &&
			type.declaration &&
			type.declaration.signatures &&
			type.declaration.signatures[0].parameters
		) {
			return `(${type.declaration.signatures[0].parameters
				.map(
					parameter =>
						`<span class="reference__method__property_name">${
							parameter.name
						}</span>: <span class="reference__method__property_type">${resolveType(parameter.type)}</span>`
				)
				.join(', ')}): ${resolveType(type.declaration.signatures[0].type)}`
		}

		if (
			type.type === 'reflection' &&
			type.declaration &&
			type.declaration.signatures &&
			type.declaration.signatures[0].kindString === 'Call signature'
		) {
			return `() => ${resolveType(type.declaration.signatures[0].type)}`
		}

		if (type.type === 'reflection' && type.declaration && type.declaration.children) {
			return `{
				${type.declaration.children
					.map(
						parameter =>
							`<span class="reference__method__property_name">${
								parameter.name
							}</span>: <span class="reference__method__property_type">${resolveType(parameter.type)}</span>`
					)
					.join(', ')}
			}`
		}

		if (type.type === 'indexedAccess' && type.indexType && type.indexType.constraint) {
			return `${resolveType(type.indexType.constraint.target)}[${type.indexType.name}]`
		}
		if (type.type === 'query' && type.queryType && type.queryType.type === 'reference') {
			return resolveType(type.queryType)
		}

		console.warn('cant resolve type', type)
	}
}

// prettier-ignore
export function printVariables(variables) {
    return `
        <ul class="reference__list">
        ${variables.map(variable => `
            <li>
                <div>${resolveMethodOrPropertyName(variable)}: <span class="reference__property__type">${resolveType(variable.type)}</span>${variable.defaultValue 
					? `<span class="reference__property__default_value"> = ${variable.defaultValue}</span>` 
					: ''
				}</div>
				<div class="reference__property__description">${printDescription(variable)}</div>
				${variable.examples ? variable.examples.map(printFunctionExample).join('') : ''}
            </li>
        `).join('\n')}
        </ul>
    `
}

export function printFunctionExample(example) {
	const reg = /```(.+)(\n[\s\S]+\n)```/gim
	if (example.match(reg)) {
		const [, lang, text] = reg.exec(example)

		return `<div class="reference__method__example"><pre class="prettyprint"><code translate="no" class="language-${lang}">${text.replace(
			/^\s+|\s+$/g,
			''
		)}</code></pre></div>`
	}
}

export function resolveTypeParameter(variable) {
	if (variable.typeParameter) {
		return (
			'&lt;' +
			variable.typeParameter
				.map(typeParameter => {
					return `${typeParameter.name}${typeParameter.type ? `  extends ${resolveType(typeParameter.type)}` : ''}`
				})
				.join(', ') +
			'&gt;'
		)
	}

	return ''
}

// prettier-ignore
export  function printFunctions(functions) {



    return `
        <ul class="reference__list">
        ${functions.map(callable => {
			const parameters = callable.parameters || []
            return `<li>
                <div>
                    ${resolveMethodOrPropertyName(callable)}${resolveTypeParameter(callable)}(${parameters.map(parameter => 
						`<span class="reference__method__property_name">${parameter.name}${parameter.bOptional ? '?' : ''}</span>: <span class="reference__method__property_type">${resolveType(parameter.type)}</span>${
							parameter.defaultValue ? `<span class="reference__method__property_default_value"> = ${parameter.defaultValue}</span>` : ''
						}`
					).join(', ')}): ${resolveType(callable.return_type)}
                </div>
                <div class="reference__method__description">${printDescription(callable)}</div>
                ${callable.examples ? callable.examples.map(printFunctionExample).join('') : ''}
            </li>`
        }).join('\n')}
        </ul>
    `
}

export function resolveMethodOrPropertyName(mp) {
	let prefix

	switch (true) {
		case mp.bAbstrasct:
			prefix = 'abstract '
			break
		case mp.bStatic && mp.bReadonly:
			prefix = 'static readonly '
			break
		case mp.bStatic:
			prefix = 'static '
			break
		default:
			prefix = '.'
	}
	return `${prefix}<h4 class="reference__property__name">${mp.name}</h4>`
}

export function printDescription(property, bComment = false) {
	return property.description
		? bComment
			? `\n\t// ${property.description.split('\n').join('\n\t// ')}\n\t`
			: `${property.description.split('\n').join('<br />')}`
		: ''
}
