import { areSimilar } from '../utilities'

/**
 * Create Navigation
 */
function createList(root, search, lang) {
	const rootElement = document.createElement('div')

	Object.keys(root).forEach(firstLevelKey => {
		const firstLevelItem = root[firstLevelKey]

		const h2title = document.createElement('h2')

		const keys = Object.keys(firstLevelItem)

		if (keys.length === 0 || (keys.length === 1 && Object.keys(firstLevelItem[keys[0]]).length === 0)) return

		h2title.innerText = firstLevelKey
		const content = document.createElement('div')

		keys.forEach(secondLevelKey => {
			const h3title = document.createElement('h3')
			h3title.innerText = secondLevelKey

			const list = document.createElement('ul')

			let added = 0
			Object.keys(firstLevelItem[secondLevelKey]).forEach(listItemKey => {
				if (search === undefined || search.length === 0 || areSimilar(listItemKey, search)) {
					const listItem = document.createElement('li')
					const listItemLink = document.createElement('a')
					listItemLink.className = 'link'
					listItemLink.innerText = listItemKey
					listItemLink.href = '#/' + firstLevelItem[secondLevelKey][listItemKey].replace('$lang', lang)
					listItem.appendChild(listItemLink)
					list.appendChild(listItem)
					added++
				}
			})

			if (added) {
				content.appendChild(h3title)
				content.appendChild(list)
			}
		})

		rootElement.appendChild(h2title)
		rootElement.appendChild(content)
	})

	return rootElement
}

export default createList
