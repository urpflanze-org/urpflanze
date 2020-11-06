import { ucfirst } from '../utilities'

async function getNavigation() {
	const result = {
		Examples: {},
	}

	const list = result.Examples

	const response = await fetch('https://api.github.com/repos/genbs/urpflanze/contents/examples')
	const data = await response.json()

	const items = data.filter(e => e.type === 'dir')

	for (let i = 0, len = items.length; i < len; i++) {
		const catName = ucfirst(items[i].name.slice(3))
		list[catName] = {}
		const current = list[catName]
		const response = await fetch(`https://api.github.com/repos/genbs/urpflanze/contents/${items[i].path}`)
		const data = await response.json()
		const childs = data.filter(e => e.type === 'file')

		childs.forEach(({ name, path }) => {
			current[ucfirst(name.slice(3, -5))] = path
		})
	}

	return result
}

export default getNavigation
