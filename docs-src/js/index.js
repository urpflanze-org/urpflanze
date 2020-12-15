import { bindNavigation } from './navigation/navigation'
import { bindRouting } from './routing/routing'

let lang = localStorage.getItem('lang') || (navigator.language.match(/it/gi) ? 'it' : 'en')

const options = document.querySelector('#lang').getElementsByTagName('option')

for (let i = 0, len = options.length; i < len; i++) {
	if (options[i].getAttribute('value') === lang) {
		options[i].selected = 'selected'
		break
	}
}

bindNavigation(lang)

document.querySelector('#search').addEventListener('search', e => {
	bindNavigation(lang, e.target.value)
})
document.querySelector('#search').addEventListener('keyup', e => {
	bindNavigation(lang, e.target.value)
})

document.querySelector('#lang').addEventListener('change', e => {
	lang = e.target.value === 'it' ? 'it' : 'en'
	localStorage.setItem('lang', lang)

	bindNavigation(lang)
})

document.querySelector('#version').textContent = VERSION

bindRouting()
document.querySelector('main').style.display = ''
