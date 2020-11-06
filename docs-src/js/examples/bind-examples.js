import { ucfirst } from '../utilities'

function compress(data) {
	return LZString.compressToBase64(JSON.stringify(data))
		.replace(/\+/g, `-`) // Convert '+' to '-'
		.replace(/\//g, `_`) // Convert '/' to '_'
		.replace(/=+$/, ``) // Remove ending '='
}

async function routeExample(path) {
	const response = await fetch(`https://api.github.com/repos/genbs/urpflanze/contents/${path}`)
	const { name, html_url, download_url, content } = await response.json()

	const rawSource = atob(content)
	const source = rawSource.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

	const parameters = compress({
		files: {
			'index.html': {
				content: rawSource,
			},
		},
	})

	const codesandbox_url = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`

	const category = ucfirst(path.split('/')[1])
	const parsedName = ucfirst(name.slice(3, -5).replace(/-/gi, ' '))

	return `
		<h1>Example: ${category} | ${parsedName}</h1>
		<h2>Output</h2>
		<div class="example__iframe-container">
			<iframe class="example__iframe" src="data:text/html;base64,${content}"></iframe>
		</div>

		<h2>Links</h2>
		<div class="example__links">
			Edit on <a target="_blank" href="${codesandbox_url}">CodeSandbox</a>,
			view source on <a target="_blank" href="${html_url}">Github</a>
			or <a target="_blank" href="${download_url}">Download</a>
		</div>

		<h2>Source</h2>
		<div class="example__code">
			<pre class="prettyprint"><code translate="no" class="language-html">${source}</code></pre>
		</div>
    `
}

export default routeExample
