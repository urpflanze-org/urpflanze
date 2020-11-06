export function ucfirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
}

const equalityString = (a, b) => {
	let equivalency = 0
	const minLength = Math.min(a.length, b.length)
	const maxLength = Math.max(a.length, b.length)

	for (let i = 0; i < minLength; i++) if (a[i] === b[i]) equivalency++

	return (equivalency / minLength) * 100
}

const similarIntoArray = (needle, a) => {
	for (let i = 0; i < a.length; i++) {
		if (a[i].length <= needle.length / 2) continue
		if (equalityString(a[i], needle) >= 70) return true
	}
	return false
}

export function areSimilar(a, needle) {
	a = a.toLowerCase()
	needle = needle.toLowerCase()

	if (a.indexOf(needle) >= 0) return true

	if (needle.indexOf(' ') >= 0) {
		needle = needle.split(' ').filter(a => a.length > 3)
		a = a.split(' ').filter(a => a.length > 3)

		let count = 0
		for (let i = 0; i < needle.length; i++, similarIntoArray(needle[i], a) && count++)
			return (count / needle.length) * 100 > 70
	}

	a = a.split(' ')
	return a.length == 1 ? equalityString(a[0], needle) >= 70 : similarIntoArray(needle, a)
}
