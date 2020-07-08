export default (
	centerPosition: [number, number],
	radius: number,
	angle: number,
): [number, number] => {
	const [x, y] = centerPosition
	return [x + Math.cos(angle) * radius, y - Math.sin(angle) * radius]
}
