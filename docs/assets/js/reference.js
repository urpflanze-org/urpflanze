function loadReference(refName) {
	const ref = window.references.find(e => e.name === refName)

	content.innerHTML = `<h1>${ref.name}</h1>`

	console.log(ref)

	// const properties = ref.properties ? ref.properties.filter(p => p.bPublic) : []
	// const methods = ref.methods ? ref.methods.filter(p => p.bPublic) : []
	if (ref) {
		switch (ref.type) {
			case 'Class':
				content.innerHTML = getHTMLFromClassReference(ref)
				break
			case 'Interface':
				content.innerHTML = `
                    <h1 class="reference__name">${resolveName(ref)}</h1>
                    <div class="first-content-line">${ref.description || ''}</div>
                    ${ref.properties ? printVariables(ref.properties) : ''}
                `
				break
			case 'Object':
				content.innerHTML = `
                    <h1 class="reference__name">${resolveName(ref)}</h1>
                    <div class="first-content-line">${ref.description || ''}</div>
                    ${ref.variables ? printVariables(ref.variables) : ''}
                    ${ref.functions ? `<h2>Functions</h2>${printFunctions(ref.functions)}` : ''}
                `
				break
			case 'Type':
				content.innerHTML = `
                    <h1 class="reference__name">${resolveName(ref)}</h1>
                    <div class="first-content-line">${ref.description || ''}</div>
                    ${ref.parameter ? printVariables([ref.parameter]) : ''}
                `
				break
		}
	}

	onLoadContent()
}

function resolveName(reference) {
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

function resolveMethodOrPropertyName(mp) {
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

function resolveExtends(parentClass, result) {
	if (window.mapped_references[parentClass].extends && window.mapped_references[parentClass].extends.length > 0) {
		resolveExtends(window.mapped_references[parentClass].extends[0], result)
	}
	result.push(parentClass)
}

function resolveType(type) {
	if (typeof type === 'string') {
		return type
	}

	if (
		(type.type === 'intrinsic' || type.type === 'reference' || type.type === 'typeParameter') &&
		typeof type.id === 'undefined'
	)
		return type.name

	if (type.name === 'Array' && type.typeArguments && type.typeArguments.length === 1) {
		return type.typeArguments[0].id
			? `Array&lt;<a href="#/ref/${type.typeArguments[0].name}">${type.typeArguments[0].name}</a>&gt;`
			: `Array&lt;${type.typeArguments[0].name}&gt;`
	}

	if (type.type === 'reference' && typeof type.id !== 'undefined') {
		return `<a href="#/ref/${type.name}">${type.name}</a>`
	}

	if (type.type === 'union') {
		return type.types.map(resolveType).join(' | ')
	}

	if (type.type === 'typeOperator') {
		return `${type.operator} ${resolveType(type.target)}`
	}
}

// prettier-ignore
function printVariables(variables) {

    console.log(
        variables
    )
    return `
        <ul class="reference__list">
        ${variables.map(variable => `
            <li>
                <div>${resolveMethodOrPropertyName(variable)}: <span class="reference__property__type">${resolveType(variable.type)}</span></div>
                <div class="reference__property__description">${variable.description}</div>
            </li>
        `).join('\n')}
        </ul>
    `
}

function printFunctionExample(example) {
	const reg = /```(.+)(\n[\s\S]+\n)```/gim
	if (example.match(reg)) {
		const [, lang, text] = reg.exec(example)

		return `<div class="reference__method__example"><pre class="prettyprint"><code translate="no" class="language-${lang}">${text.replace(
			/^\s+|\s+$/g,
			''
		)}</code></pre></div>`
	}
}

// prettier-ignore
function printFunctions(functions) {
    return `
        <ul class="reference__list">
        ${functions.map(callable => {
            const parameters = callable.parameters || []
            return `<li>
                <div>
                    ${resolveMethodOrPropertyName(callable)}(
                        ${parameters.map(parameter => 
                            `<span class="reference__method__property_name">${parameter.name}</span>: <span class="reference__method__property_type">${resolveType(parameter.type)}</span>`
                        ).join(', ')
                    }): ${resolveType(callable.return_type)}
                </div>
                <div class="reference__method__description">${callable.description || ''}</div>
                ${callable.examples ? callable.examples.map(printFunctionExample) : ''}
            </li>`
        }).join('\n')}
        </ul>
    `
}

function getHTMLFromClassReference(ref) {
	const properties = ref.properties ? ref.properties.filter(p => !p.bPrivate) : []
	const methods = ref.methods ? ref.methods.filter(p => !p.bPrivate) : []

	function getContructorTemplate() {
		const parameters = ref.constructor_ref.parameters || []
		return `
            <h2>Constructor</h2>
            <h3 class="reference__constructor">${ref.name}(${parameters
			.map(parameter => `${parameter.name}: ${resolveType(parameter.type)}`)
			.join(', ')})</h3>
            <div class="reference__constructor__description">${ref.constructor_ref.description || ''}</div>
        `
	}

	// prettier-ignore
	function getPropertiesTemplate() {
        return properties.length === 0 ? '' : `
            <h2>Properties</h2>
            ${printVariables(properties)}
        `
    }

	// prettier-ignore
	function getMethodsTemplate() {
        return methods.length === 0 ? '' : `
            <h2>Methods</h2>
            ${printFunctions(methods)}
        `
    }

	return `
        <h1 class="reference__name">${resolveName(ref)}</h1>
        <div class="first-content-line">${ref.description || ''}</div>
        ${getContructorTemplate()}
        ${getPropertiesTemplate()}
        ${getMethodsTemplate()}
    `
}
