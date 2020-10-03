import { References } from '../references'
import { createPageName, resolveType } from './create-page-utility'

function printDescription(property) {
	return property.description ? `\n\t// ${property.description.split('\n').join('\n\t// ')}\n\t` : ''
}

function loadReference(refName) {
	const ref = References[refName]

	console.log(ref)

	if (ref) {
		switch (ref.type) {
			case 'Class':
				content.innerHTML = getHTMLFromClassReference(ref)
				break
			case 'Interface':
				content.innerHTML = `
				<h1 class="reference__name">${createPageName(ref)}</h1>
				<div class="first-content-line">${ref.description || ''}</div>
				<pre class="prettyprint"><code translate="no" class="language-typescript">{\n${ref.properties
					.map(
						property =>
							`\t${printDescription(property)}${property.name}${property.bOptional ? '?' : ''}: ${resolveType(
								property.type
							)}`
					)
					.join('\n')}\r}</code></pre>
				`

				break
			case 'Object':
				content.innerHTML = `
                    <h1 class="reference__name">${createPageName(ref)}</h1>
                    <div class="first-content-line">${ref.description || ''}</div>
                    ${ref.variables ? printVariables(ref.variables) : ''}
                    ${ref.functions ? `<h2>Functions</h2>${printFunctions(ref.functions)}` : ''}
                `
				break
			case 'Type':
				content.innerHTML = `
                    <h1 class="reference__name">${createPageName(ref)}</h1>
					<div class="first-content-line">${ref.description || ''}</div>
					<pre class="prettyprint"><code translate="no" class="language-typescript">${
						ref.parameter ? resolveType(ref.parameter.type) : ''
					}</code></pre>
                `
				break
			case 'Enumeration':
				content.innerHTML = `
                    <h1 class="reference__name">${createPageName(ref)}</h1>
                    <div class="first-content-line">${ref.description || ''}</div>
                    ${ref.members.map(member => `<div>${member.name}: ${member.defaultValue}</div>`).join('')}
                `
				break
			default:
				content.innerHTML = ``
				break
		}
	}
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

// prettier-ignore
function printVariables(variables) {


    return `
        <ul class="reference__list">
        ${variables.map(variable => `
            <li>
                <div>${resolveMethodOrPropertyName(variable)}: <span class="reference__property__type">${resolveType(variable.type)}</span>${variable.defaultValue 
					? `<span class="reference__property__default_value"> = ${variable.defaultValue}</span>` 
					: ''
				}</div>
                <div class="reference__property__description">${variable.description || ''}</div>
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

	function resolveTypeParameter(variable){
		if (variable.typeParameter) {
			return '&lt;' + variable.typeParameter.map(typeParameter => {
				return `${typeParameter.name}${typeParameter.type ? `  extends ${resolveType(typeParameter.type)}` : ''}`
			}).join(', ') + '&gt;'
		}

		return ''
	}

    return `
        <ul class="reference__list">
        ${functions.map(callable => {
            const parameters = callable.parameters || []
            return `<li>
                <div>
                    ${resolveMethodOrPropertyName(callable)}${resolveTypeParameter(callable)}(${parameters.map(parameter => 
						`<span class="reference__method__property_name">${parameter.name}${parameter.bOptional ? '?' : ''}</span>: <span class="reference__method__property_type">${resolveType(parameter.type)}</span>${parameter.defaultValue 
							? `<span class="reference__method__property_default_value>" = ${parameter.defaultValue}</span>` 
							: ''
						}`
					).join(', ')}): ${resolveType(callable.return_type)}
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
		if (ref.constructor_ref) {
			const parameters = ref.constructor_ref.parameters || []
			return `
				<h2>Constructor</h2>
				<h3 class="reference__constructor">${ref.name}(${parameters
				.map(
					parameter =>
						`${parameter.name}: ${resolveType(parameter.type)}${
							parameter.defaultValue ? ` = ${parameter.defaultValue}` : ''
						}`
				)
				.join(', ')})</h3>
				<div class="reference__constructor__description">${ref.constructor_ref.description || ''}</div>
			`
		}
		return ''
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
        <h1 class="reference__name">${createPageName(ref)}</h1>
        <div class="first-content-line">${ref.description || ''}</div>
        ${getContructorTemplate()}
        ${getPropertiesTemplate()}
        ${getMethodsTemplate()}
    `
}

export { loadReference }
