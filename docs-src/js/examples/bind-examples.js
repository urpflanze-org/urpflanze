const examples = document.getElementById('examples')

async function routeExample(path) {
	console.log('path', path)

	const response = await fetch(`https://api.github.com/repos/genbs/urpflanze/contents/${path}`)
	const { name, html_url, download_url, content } = await response.json()

	// const codesandbox_url = `https://codesandbox.io/s/urpflanze-examples-v286j?file=/${path}`

	return `
        <h1>Example ${name}</h1>

        <iframe src="data:text/html;base64,${content}"></iframe>

    `
	// <a href="${codesandbox_url}">open on CodeSandbox</a>
}

// const list = document.createElement('ul')
// data.forEach(({ name, download_url }) => {
//     const codesandbox_url = `https://codesandbox.io/s/urpflanze-examples-v286j?file=/${name}`

//     const fragment = document.createDocumentFragment()
//     const li = document.createElement('li')

//     const nameText = document.createElement('h2')
//     nameText.innerText = name

//     li.appendChild(nameText)

//     const iframe = document.createElement('iframe')
//     fetch(download_url)
//         .then(response => response.text())
//         .then(data => {
//             iframe.src = `data:text/html;charset=utf-8,${encodeURI(data)}`
//         })
//     li.appendChild(iframe)

//     const externalUrl = document.createElement('a')
//     externalUrl.href = codesandbox_url
//     externalUrl.target = '_blank'
//     externalUrl.innerText = 'Open in CodeSandbox.io'
//     li.appendChild(externalUrl)

//     list.appendChild(li)
// })

// examples.appendChild(list)

export default routeExample
