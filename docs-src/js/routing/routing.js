import routeExample from '../examples/bind-examples'
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
	const content = document.getElementById('content')

	if (page.length === 0) {
		page = document.querySelector('#nav a').getAttribute('href')
	}

	if (currentPage !== page) {
		closeMenu()
		activateLink(page)

		const endpoint = `pages${page.substr(1)}.html`

		if (page.indexOf('ref') >= 0) {
			loadReference(page.substr(6))
			onLoadContent()
		} else if (page.indexOf('#/examples') === 0) {
			routeExample(page.substr(2)).then(data => {
				content.innerHTML = data
				onLoadContent()
			})
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
	let title = window.location.href.split('/').pop()
	if (title.length > 0) {
		title = title.replace('.html', '')
	} else {
		title = 'Urpflanze'
	}

	gtag('event', 'page_view', {
		page_location: window.location.href,
		page_path: '/' + window.location.hash,
		page_title: title,
	})

	document.title = title

	const content = document.getElementById('content')

	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})

	// scripts
	const scripts = content.getElementsByTagName('script')

	for (let i = 0; i < scripts.length; i++) {
		if (scripts[i].classList.contains('runnable-script')) {
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
			script = script.replace(/document\.body/gi, `document.getElementById('${script_id}')`)
			scripts[i].innerHTML = script
			eval(script)
		} else {
			eval(scripts[i].innerHTML)
		}
	}

	// dynamic menu
	const h2 = content.getElementsByTagName('h2')
	const ul = document.createElement('ul')
	ul.className = 'page-navigation'
	for (let i = 0; i < h2.length; i++) {
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
	if (content.firstElementChild && ul.children.length > 0) {
		content.firstElementChild.after(ul)
	}

	// bind events
	const cliccables = document.getElementsByClassName('open-container')
	function openContainer(e) {
		const container = document.getElementById(e.target.getAttribute('data-container'))
		if (container) {
			container.style.height = parseFloat(container.style.height) > 0 ? '0px' : window.innerHeight * 0.4 + 'px'
		}
	}
	for (let i = 0; i < cliccables.length; i++) {
		cliccables[i].addEventListener('click', openContainer, false)
		openContainer({ target: cliccables[i] })
	}

	// code prettyprint
	PR.prettyPrint()
}
