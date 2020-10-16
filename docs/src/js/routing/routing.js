import { closeMenu, activateLink } from '../navigation/navigation'
import { loadReference } from '../reference/create-reference-page'

let currentPage

export function bindRouting() {
	goto(window.location.hash)

	window.addEventListener('popstate', () => {
		goto(window.location.hash)
	})
}

/**
 * Dynamic content
 */
export function goto(page) {
	if (page.length === 0) {
		page = document.querySelector('#nav a').getAttribute('href')
	}

	if (currentPage !== page) {
		closeMenu()
		activateLink(page)

		const endpoint = `${BASE_PAGE_URL}public/pages${page.substr(1)}.html`

		if (page.indexOf('ref') >= 0) {
			loadReference(page.substr(6))
			onLoadContent()
		} else {
			fetch(endpoint)
				.then(reponse => reponse.text())
				.then(data => {
					currentPage = endpoint
					content.innerHTML = data
					onLoadContent()
				})
		}
	}
}

/**
 * Bind any when content load
 */
function onLoadContent() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})

	// scripts
	const scripts = content.getElementsByClassName('runnable-script')

	for (var i = 0; i < scripts.length; i++) {
		const script_container = document.createElement('div')
		const script_id = scripts[i].getAttribute('id')
		let script = scripts[i].innerHTML
		script_container.innerHTML = `
			<pre class="prettyprint"><code translate="no" class="language-js">${script}</code></pre>
			<div class="code-desc">
				<span class="open-container" data-container="${script_id}_c">Mostra / Nascondi il risultato ▸</span>
			</div>

			<div class="upflanze-container" id="${script_id}_c">
				<canvas id="${script_id}"></canvas>
			</div>
		`
		scripts[i].before(script_container)
		script = script.replaceAll('document.body', `document.getElementById('${script_id}')`)
		scripts[i].innerHTML = script
		eval(script)
	}

	// dynamic menu
	const h2 = content.getElementsByTagName('h2')
	const ul = document.createElement('ul')
	ul.className = 'page-navigation'
	for (var i = 0; i < h2.length; i++) {
		const li = document.createElement('li')
		const ch2 = h2[i]
		li.innerText = ch2.innerText
		li.addEventListener(
			'click',
			() => {
				const { top } = ch2.getBoundingClientRect()
				window.scrollTo({ top, behavior: 'smooth' })
			},
			false
		)
		ul.appendChild(li)
	}
	content.firstElementChild.after(ul)

	// bind events
	const cliccables = document.getElementsByClassName('open-container')
	function openContainer(e) {
		const container = document.getElementById(e.target.getAttribute('data-container'))
		if (container) {
			container.style.height = parseFloat(container.style.height) > 0 ? '0px' : window.innerHeight * 0.4 + 'px'
		}
	}
	for (let i = 0; i < cliccables.length; i++) cliccables[i].addEventListener('click', openContainer, false)

	// code prettyprint
	PR.prettyPrint()
}
