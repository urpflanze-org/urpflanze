const examples = document.getElementById('examples')

async function routeExample(path) {
	const response = await fetch(`https://api.github.com/repos/genbs/urpflanze/contents/${path}`)
	const { name, html_url, download_url, content } = await response.json()

	const codesandbox_url = `https://codesandbox.io/s/genbsurpflanze-examples-hfpcb?file=${path.substr(9)}`

	const source = atob(content)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')

	return `
		<h1>Example ${name}</h1>
		<h2>Output</h2>
		<iframe class="example__iframe" src="data:text/html;base64,${content}"></iframe>
		
		<h2>Links</h2>
		<div class="example__links">
			<a href="${codesandbox_url}">CodeSandbox</a>
			<a href="${html_url}">Github</a>
			<a href="${download_url}">Download</a>
		</div>

		<h2>Source</h2>
		<div class="example__code">
		<pre class="prettyprint"><code translate="no" class="language-html">${source}</code></pre>
		</div>
    `
}

export default routeExample
