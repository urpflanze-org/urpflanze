import { createPageName, printFunctions, printVariables, resolveType } from './create-page-utility'

export default function createPageFromClass(ref) {
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
