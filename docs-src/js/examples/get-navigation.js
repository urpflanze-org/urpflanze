async function getNavigation() {
	const result = {
		Examples: {},
	}

	const list = result.Examples

	const response = await fetch('https://api.github.com/repos/genbs/urpflanze/contents/examples')
	const data = await response.json()

	const items = data.filter(e => e.type === 'dir')

	for (let i = 0, len = items.length; i < len; i++) {
		list[items[i].name] = {}
		const current = list[items[i].name]
		const response = await fetch(`https://api.github.com/repos/genbs/urpflanze/contents/${items[i].path}`)
		const data = await response.json()
		const childs = data.filter(e => e.type === 'file')

		childs.forEach(({ name, path }) => {
			current[name.slice(4, -5)] = path
		})
	}

	return result
}

export default getNavigation
