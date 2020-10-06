import { References } from '../references'
import createPageFromClass from './create-page-from-class'
import {
	createPageName,
	printDescription,
	printFunctionExample,
	printFunctions,
	resolveType,
	resolveTypeParameter,
} from './create-page-utility'

function loadReference(refName) {
	const ref = References[refName]

	console.log(ref)

	if (ref) {
		switch (ref.type) {
			case 'Class':
				content.innerHTML = createPageFromClass(ref)
				break
			case 'Interface':
				content.innerHTML = `
				<h1 class="reference__name">${createPageName(ref)}</h1>
				<div class="first-content-line">${printDescription(ref)}</div>
				<pre class="prettyprint"><code translate="no" class="language-typescript">{\n${ref.properties
					.map(
						property =>
							`\t${printDescription(property, true)}${property.name}${property.bOptional ? '?' : ''}: ${resolveType(
								property.type
							)}`
					)
					.join('\n')}\r}</code></pre>
				`

				break
			case 'Object':
				content.innerHTML = `
                    <h1 class="reference__name">${createPageName(ref)}</h1>
					<div class="first-content-line">${printDescription(ref)}</div>
					${ref.examples ? ref.examples.map(printFunctionExample).join('') : ''}
                    ${ref.variables ? printVariables(ref.variables) : ''}
                    ${ref.functions ? `<h2>Functions</h2>${printFunctions(ref.functions)}` : ''}
                `
				break
			case 'Type':
				content.innerHTML = `
                    <h1 class="reference__name">${createPageName(ref)}</h1>
					<div class="first-content-line">${printDescription(ref)}</div>
					<pre class="prettyprint"><code translate="no" class="language-typescript">${
						ref.parameter ? resolveType(ref.parameter.type) : ''
					}</code></pre>
                `
				break
			case 'Enumeration':
				content.innerHTML = `
                    <h1 class="reference__name">${createPageName(ref)}</h1>
					<div class="first-content-line">${printDescription(ref)}</div>
					<pre class="prettyprint"><code translate="no" class="language-typescript">{\n${ref.members
						.map(member => `\t${printDescription(member, true)}${member.name}: ${member.defaultValue}`)
						.join('\n')}\r}</code></pre>
				`
				// ${ref.members.map(member => `<div>${member.name}: ${member.defaultValue}</div>`).join('')}
				break
			case 'Function':
				content.innerHTML = `
                    <h1 class="reference__name">${createPageName(ref)}</h1>
					<div class="first-content-line">${printDescription(ref)}</div>
					<br />
					${resolveTypeParameter(ref)}(${ref.parameters
					.map(
						parameter =>
							`<span class="reference__method__property_name">${parameter.name}${
								parameter.bOptional ? '?' : ''
							}</span>: <span class="reference__method__property_type">${resolveType(parameter.type)}</span>${
								parameter.defaultValue
									? `<span class="reference__method__property_default_value>" = ${parameter.defaultValue}</span>`
									: ''
							}`
					)
					.join(', ')}): ${resolveType(ref.return_type)}

					${ref.examples ? ref.examples.map(printFunctionExample).join('') : ''}
                `
				break
			default:
				content.innerHTML = ``
				break
		}
	}
}

export { loadReference }
