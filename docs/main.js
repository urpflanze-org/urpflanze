const content = document.querySelector('#content')
let lang = localStorage.getItem('lang') || (navigator.language.match(/it/gi) ? 'it' : 'en')
let search = ''

init()

/**
 *
 */
function init() {
	createNav()
	bindSearch()
	bindRouting()
	bindLang()
	goto(window.location.hash)
	layout()
}

function layout() {
	document
		.getElementById('menu_btn')
		.addEventListener('click', () => document.querySelector('aside').classList.add('open'), { passive: true })
	document
		.getElementById('aside-bg')
		.addEventListener('click', () => document.querySelector('aside').classList.remove('open'), { passive: true })
}

/**
 * Dynamic content
 */
function goto(page) {
	if (page.length === 0) {
		page = document.querySelector('#nav a').getAttribute('href')
	}

	const links = document.querySelectorAll('.link')

	for (let i = 0, len = links.length; i < len; i++) links[i].classList.remove('link--active')

	const a = document.querySelector(`a[href="${page}"]`)
	a && a.classList.add('link--active')

	const endpoint = 'pages' + page.substr(1) + '.html'

	fetch(endpoint)
		.then(reponse => reponse.text())
		.then(data => {
			content.innerHTML = data
			PR.prettyPrint()
		})
}

/**
 *
 */

function bindLang() {
	function selectLang(_lang) {
		if (_lang != 'it' && _lang != 'en') _lang = 'en'

		localStorage.setItem('lang', _lang)
		lang = _lang
		const page = window.location.hash.replace(/\/(en|it)\//gi, '/' + lang + '/')
		createNav()
		goto(page)
		window.history.pushState(null, '', page)
	}

	const select = document.getElementById('lang')
	const option = select.querySelector('option[value="' + lang + '"]')
	option && option.setAttribute('selected', 'selected')
	select.addEventListener('change', e => selectLang(e.target.value), { passive: true })
}

function bindRouting() {
	window.addEventListener('popstate', () => {
		goto(window.location.hash)
	})
}

function bindSearch() {
	document.querySelector('#search').addEventListener('keyup', e => {
		search = e.target.value
		createNav()
	})
}

/**
 * Create Navigation
 */
function createNav() {
	const fragment = document.createDocumentFragment()
	const root = window.nav[lang]

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
				if (search === undefined || search.length === 0 || equality(listItemKey, search)) {
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

	const nav = document.querySelector('#nav')
	nav.innerHTML = ''
	nav.appendChild(fragment)
}

/**
 * Utilities
 */

const equalityString = (a, b) => {
	let equivalency = 0
	const minLength = Math.min(a.length, b.length)
	const maxLength = Math.max(a.length, b.length)

	for (let i = 0; i < minLength; i++) if (a[i] === b[i]) equivalency++

	return (equivalency / minLength) * 100
}

const similarIntoArray = (needle, a) => {
	for (let i = 0; i < a.length; i++) {
		if (a[i].length <= needle.length / 2) continue
		if (equalityString(a[i], needle) >= 70) return true
	}
	return false
}

const equality = (a, needle) => {
	a = a.toLowerCase()
	needle = needle.toLowerCase()

	if (a.indexOf(needle) >= 0) return true

	if (needle.indexOf(' ') >= 0) {
		needle = needle.split(' ').filter(a => a.length > 3)
		a = a.split(' ').filter(a => a.length > 3)

		let count = 0
		for (let i = 0; i < needle.length; i++, similarIntoArray(needle[i], a) && count++)
			return (count / needle.length) * 100 > 70
	}

	a = a.split(' ')
	return a.length == 1 ? equalityString(a[0], needle) >= 70 : similarIntoArray(needle, a)
}
