const path = require('path')
const fs = require('fs')
const package = require('../package.json')
const version = JSON.stringify(package.version).slice(1, -1)

const buildFolder = path.resolve('./build')

const getLicense = filename => `/** @license Urpflanze v${version}
 * ${filename}
 *
 * Github: https://github.com/genbs/urpflanze/
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
`

function addLicense(filename) {
	const filepath = path.join(buildFolder, filename)
	console.log('filepath', filepath)
	const data = fs.readFileSync(filepath, 'utf8')

	if (data && data.match(/^\/\*\* @license/i) === null) {
		fs.unlinkSync(filepath)

		fs.writeFileSync(filepath, `${getLicense(filename)}${data}`)
	}
}

addLicense('urpflanze-light.min.js')
addLicense('urpflanze-light.js')
addLicense('urpflanze.js')
addLicense('urpflanze.min.js')
