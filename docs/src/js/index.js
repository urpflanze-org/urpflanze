import { bindNavigation } from './navigation/navigation'
import { bindRouting } from './routing/routing'

import '../scss/index.scss'

const lang = localStorage.getItem('lang') || (navigator.language.match(/it/gi) ? 'it' : 'en')

bindNavigation(lang)

document.querySelector('#search').addEventListener('keyup', e => {
	bindNavigation(lang, e.target.value)
})

bindRouting()
