import wiki from './wiki'

import { NavReferences } from '../references'
import createList from './create-list'

document.getElementById('menu_btn').addEventListener('click', openMenu, { passive: true })
document.getElementById('aside-bg').addEventListener('click', closeMenu, { passive: true })

export function bindNavigation(lang, search) {
	const nav = document.querySelector('#nav')

	nav.innerHTML = ''

	const _wiki = createList(wiki[lang], search)
	const _doc = createList(NavReferences, search, lang)
	nav.append(_wiki)

	nav.append(_doc)
}

export function openMenu() {
	document.querySelector('aside').classList.add('open')
}

export function closeMenu() {
	document.querySelector('aside').classList.remove('open')
}

export function activateLink(url) {
	const links = document.querySelectorAll('.link')

	for (let i = 0, len = links.length; i < len; i++) links[i].classList.remove('link--active')

	const a = document.querySelector(`a[href="${url}"]`)

	a && a.classList.add('link--active')
}
