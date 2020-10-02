const References = { References: {} }
window.mapped_references = {}

window.references
	.sort((a, b) => a.order - b.order)
	.forEach(reference => {
		mapped_references[reference.name] = reference

		if (reference.category) {
			const categories = reference.category.split('.')
			let r = References
			level = 0
			categories.forEach(category => {
				if (typeof r[category] === 'undefined') r[category] = {}
				r = r[category]
				level++
			})
			if (level === 2) {
				r[reference.name] = 'ref/' + reference.name
			} else {
				console.log(r)
				if (typeof r[''] === 'undefined') {
					r[''] = {}
				}
				r[''][reference.name] = 'ref/' + reference.name
			}
		} else {
			References['References'][reference.name] = 'ref/' + reference.name
		}
	})

console.log(References)

const ungroup = References['References']

delete References['References']

window.nav = {
	it: {
		Wiki: {
			Introduzione: {
				"Cos'è Urpflanze?": 'it/introduzione',
			},

			'Primi passi': {
				Installazione: 'it/installazione',
				'Crea una scena': 'it/crea-una-scena',
				'DrawerCanvas e gestione del tempo': '',
				'Timeline e creazione di un loop': '',
			},
			Avanzate: {
				Ripetizioni: '',
				'Forme generative': '',
				'Vertex Callback': '',
			},
		},

		...References,

		'': {
			'': ungroup,
		},
	},

	en: {},
}

console.log(window.nav)
