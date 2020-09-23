import { TArray } from '@core/math/Vec2'

const now = (): number => (performance && performance.now ? performance.now() : Date.now())
const toArray = (t: number | TArray) => (Array.isArray(t) ? t : [t, t])

export { now, toArray }
