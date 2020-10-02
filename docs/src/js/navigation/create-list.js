import { areSimilar } from '../utilities'

/**
 * Create Navigation
 */
function createList(root, search) {
	const fragment = document.createDocumentFragment()

	Object.keys(root).forEach(firstLevelKey => {
		const firstLevelItem = root[firstLevelKey]

		const h2title = document.createElement('h2')
		h2title.innerText = firstLevelKey
		const content = document.createElement('div')

		Object.keys(firstLevelItem).forEach(secondLevelKey => {
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

		fragment.appendChild(h2title)
		fragment.appendChild(content)
	})

	return fragment
}

export default createList
