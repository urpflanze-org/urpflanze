import { References } from '../references'
import createPageFromClass from './create-page-from-class'
import {
	createPageName,
	printDescription,
	printFunctionExample,
	printFunctions,
	printVariables,
	resolveType,
	resolveTypeParameter,
} from './create-page-utility'

function loadReference(refName) {
	const ref = References[refName]

	const content = document.getElementById('content')
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
						(property, index) =>
							`\t${printDescription(property, true, index === 0)}${property.name}${
								property.bOptional ? '?' : ''
							}: ${resolveType(property.type)}`
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
						.map((member, i) => `\t${printDescription(member, true, i === 0)}${member.name}: ${member.defaultValue}`)
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
									? `<span class="reference__method__property_defaultValue>" = ${parameter.defaultValue}</span>`
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

		const sourcelink = `https://github.com/genbs/urpflanze/blob/dev/${ref.source.fileName}#L${ref.source.line}`
		content.innerHTML += `<h2>Source</h2><div class="reference__source_url"><a target="_blank" href="${sourcelink}">${ref.source.fileName}</a></div>`
	}
}

export { loadReference }
