import Asteroid from '../model/Asteroid'

export default (canvas: HTMLCanvasElement): Asteroid => {
	const { offsetWidth, offsetHeight } = canvas

	const vxMult = offsetWidth / 200
	const vyMult = offsetHeight / 200

	const radius = Math.random() * 40 + 10
	const angularVelocity = Math.random() * 0.1 - 0.05

	const side = Math.floor(Math.random() * 4)

	let position: [number, number]
	let velocity: [number, number]

	switch (side) {
		case 0:
			position = [Math.random() * offsetWidth, -radius]
			velocity = [
				Math.random() * vxMult - vxMult / 2,
				(Math.random() * vyMult) / 2,
			]
			break
		case 1:
			position = [offsetWidth + radius, Math.random() * offsetHeight]
			velocity = [
				(-Math.random() * vxMult) / 2,
				Math.random() * vyMult - vyMult / 2,
			]
			break
		case 2:
			position = [Math.random() * offsetWidth, offsetHeight + radius]
			velocity = [
				Math.random() * vxMult - vxMult / 2,
				(-Math.random() * vyMult) / 2,
			]
			break
		case 3:
			position = [-radius, Math.random() * offsetHeight]
			velocity = [
				(Math.random() * vxMult) / 2,
				Math.random() * vyMult - vyMult / 2,
			]
			break
	}
	return new Asteroid(position, velocity, angularVelocity, radius)
}
