const references = {}

window.references.forEach(refence => {
	references[refence.name] = `ref/${refence.name}`
})

window.nav = {
	it: {
		'': {
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

		Referenze: {
			'': references,
		},
	},

	en: {},
}
