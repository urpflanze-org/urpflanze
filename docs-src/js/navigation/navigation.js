import wiki from './wiki'

import GetExamplesNavigation from '../examples/get-navigation'
import { NavReferences } from '../references'
import createList from './create-list'

document.getElementById('menu_btn').addEventListener('click', openMenu, { passive: true })
document.getElementById('aside-bg').addEventListener('click', closeMenu, { passive: true })

let examples = null,
	l = undefined,
	s = undefined
GetExamplesNavigation().then(data => {
	examples = data
	bindNavigation(l, s)
})

export function bindNavigation(lang, search) {
	l = lang
	s = search

	const nav = document.querySelector('#nav')

	nav.innerHTML = ''

	const _wiki = createList(wiki[lang], search, lang)
	nav.append(_wiki)

	if (examples) {
		const _examples = createList(examples, search, lang)
		nav.firstChild.after(_examples)
	}

	const api = document.createElement('h1')
	api.innerText = 'API'
	nav.append(api)

	const _doc = createList(NavReferences, search, lang)
	nav.append(_doc)
}

export function openMenu() {
	document.querySelector('aside').classList.add('open')
	document.body.style.top = `-${window.scrollY}px`
	document.body.style.position = 'fixed'
}

export function closeMenu() {
	const scrollY = parseInt(document.body.style.top || '0')
	document.querySelector('aside').classList.remove('open')
	document.body.style.position = ''
	document.body.style.overflow = ''
	window.scrollTo(0, -scrollY)
}

export function activateLink(url) {
	const links = document.querySelectorAll('.link')

	for (let i = 0, len = links.length; i < len; i++) links[i].classList.remove('link--active')

	const a = document.querySelector(`a[href="${url}"]`)

	a && a.classList.add('link--active')
}
