import Drawable from './Drawable'
import orbitalPosition from '../service/orbitalPosition'
import degreesToRadians from '../service/degreesToRadians'

export default class Asteroid implements Drawable {
	private position: [number, number]
	private velocity: [number, number]
	private angularVelocity: number
	private radius: number
	private angle: number

	constructor(
		position: [number, number],
		velocity: [number, number],
		angularVelocity: number,
		radius: number,
	) {
		this.position = position
		this.velocity = velocity
		this.angularVelocity = angularVelocity
		this.radius = radius
		this.angle = Math.PI / 2
	}

	getPosition(): [number, number] {
		return this.position
	}

	setPosition(position: [number, number]): void {
		this.position = position
	}

	getAngle() {
		return this.angle
	}

	getRadius() {
		return this.radius
	}

	move(): void {
		const [x, y] = this.position
		const [vx, vy] = this.velocity
		this.position = [x + vx, y + vy]
		this.angle += this.angularVelocity
	}

	draw(ctx: CanvasRenderingContext2D): void {
		const { position, angle, radius } = this
		ctx.strokeStyle = 'Black'
		ctx.fillStyle = 'rgb(180,180,180)'
		ctx.beginPath()
		ctx.arc(position[0], position[1], this.radius, 0, Math.PI * 2)
		ctx.closePath()
		ctx.stroke()
		ctx.fill()
		ctx.beginPath()
		const [x1, y1] = orbitalPosition(
			position,
			radius / 2,
			angle + degreesToRadians(135),
		)
		ctx.arc(x1, y1, this.radius / 10, 0, Math.PI * 2)
		ctx.closePath()
		ctx.stroke()
		ctx.beginPath()
		const [x2, y2] = orbitalPosition(
			position,
			radius / 3,
			angle + degreesToRadians(300),
		)
		ctx.arc(x2, y2, radius / 6, 0, Math.PI * 2)
		ctx.closePath()
		ctx.stroke()
		ctx.beginPath()
		const [x3, y3] = orbitalPosition(
			position,
			radius / 1.4,
			angle + degreesToRadians(90),
		)
		ctx.arc(x3, y3, radius / 7.5, 0, Math.PI * 2)
		ctx.closePath()
		ctx.stroke()
	}
}
