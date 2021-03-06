import Drawer from '@services/drawers/Drawer'
import DrawerSVG from '@services/drawers/drawer-svg/DrawerSVG'
import { IDrawerSVGOptions } from '@services/types/drawer'
import { IRenderSettings } from '@services/types/renderer'

const DEFAULT_SETTINGS = {
	size: 1080,
	quality: 1,
	time: 0,
	noBackground: true,
}

/**
 *
 * @category Services.Export/Import
 * @class SVGExporter
 */
class SVGExporter {
	static parse(drawer: Drawer<any, any>, settings: IRenderSettings): string {
		settings = { ...DEFAULT_SETTINGS, ...settings }

		const svg = this.parseAsSVG(drawer, settings)

		return svg.outerHTML
	}

	static parseAsSVG(drawer: Drawer<any, any>, settings: IRenderSettings): SVGElement {
		settings = { ...DEFAULT_SETTINGS, ...settings }

		const scene = drawer.getScene()
		const drawerOptions: IDrawerSVGOptions = {
			...drawer.getOptions(),
			time: settings.time,
			decimals: Math.floor(settings.quality * 4),
			noBackground: settings.noBackground,
		}

		const container = document.createElement('div')
		const tmp = new DrawerSVG(scene, container, drawerOptions, drawer.getRatio())
		const tmpTimeline = tmp.getTimeline()
		tmpTimeline.setDuration(drawer.getTimeline().getDuration())
		tmpTimeline.setTime(drawerOptions.time || 0)

		tmp.draw()

		return container.firstChild as SVGElement
	}
}

export default SVGExporter
