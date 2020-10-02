import { References } from '../references'

export function createPageName(reference) {
	let name = ''

	if (typeof reference.extends !== 'undefined') {
		const extends_class = []
		reference.extends.length > 0 && resolveExtends(reference.extends[0], extends_class)

		name += '<small class="too">'
		name += extends_class.map(extend => `<a href="#/ref/${extend}">${extend}</a>`).join(' -> ')
		name += ' -> '
		name += '</small>'
	}

	if (reference.typeParameters && reference.typeParameters.length > 1) {
		console.warn(reference.typeParameters)
	}

	name +=
		reference.name +
		(reference.typeParameters
			? reference.typeParameters.length === 1
				? '&lt;' + reference.typeParameters[0] + '&gt;'
				: ''
			: '')

	return name
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

		if (type.type === 'stringLiteral') return type.value

		if (type.type === 'intrinsic' || type.type === 'reference' || type.type === 'typeParameter')
			return (
				(References[type.name] ? `<a href="#/ref/${type.name}">${type.name}</a>` : type.name) +
				(type.typeArguments ? `&lt;${resolveType(type.typeArguments[0])}&gt;` : '')
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

		console.warn('cant resolve type', type)
	}
}
