const now = () => (performance && performance.now ? performance.now() : Date.now());
const toArray = (t) => (Array.isArray(t) ? t : [t, t]);
export { now, toArray };
//# sourceMappingURL=utilities.js.map