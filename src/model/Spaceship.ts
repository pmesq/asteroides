import Drawable from './Drawable'
import orbitalPosition from '../service/orbitalPosition'
import degreesToRadians from '../service/degreesToRadians'

export default class Spaceship implements Drawable {
	private position: [number, number]
	private angle: number

	constructor(position: [number, number]) {
		this.position = position
		this.angle = Math.PI / 2
	}

	getPosition(): [number, number] {
		return this.position
	}

	setPosition(position: [number, number]): void {
		const [oldX, oldY] = this.position
		const [newX, newY] = position
		const [dx, dy] = [oldX - newX, oldY - newY]
		const d = Math.sqrt(dx * dx + dy * dy)
		if (d > 5) {
			this.angle = Math.atan2(oldY - newY, newX - oldX)
		}
		this.position = position
	}

	getAngle() {
		return this.angle
	}

	draw(ctx: CanvasRenderingContext2D): void {
		const { position, angle } = this
		ctx.strokeStyle = 'Black'
		ctx.fillStyle = 'HotPink'
		ctx.beginPath()
		ctx.moveTo(...orbitalPosition(position, 20, angle))
		ctx.lineTo(
			...orbitalPosition(position, 15, angle + degreesToRadians(135)),
		)
		ctx.lineTo(
			...orbitalPosition(position, 15, angle + degreesToRadians(225)),
		)
		ctx.closePath()
		ctx.stroke()
		ctx.fill()
	}
}
