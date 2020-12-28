const path = require('path')
const fs = require('fs')
const { exec } = require('child_process')

const package = require('../package.json')

const version = package.version
const license = package.license

const versionFile = path.resolve('./dist/meta.js')
exec(`ttsc`, (error, stdout, stderr) => {
	const data = fs.readFileSync(versionFile, 'utf8')

	fs.unlinkSync(versionFile)
	fs.writeFileSync(versionFile, data.replace('%VERSION%', version).replace('%LICENSE%', license))
})
