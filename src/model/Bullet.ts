import Drawable from './Drawable'
import orbitalPosition from '../service/orbitalPosition'
import degreesToRadians from '../service/degreesToRadians'

export default class Bullet implements Drawable {
	private position: [number, number]
	private angle: number
	private velocity: [number, number]
	private halfDiagonal: number

	constructor(position: [number, number], angle: number, speed: number) {
		this.position = position
		this.angle = angle
		this.velocity = [Math.cos(angle) * speed, -Math.sin(angle) * speed]
		this.halfDiagonal = 15
	}

	getPosition(): [number, number] {
		return this.position
	}

	getAngle(): number {
		return this.angle
	}

	getVelocity(): [number, number] {
		return this.velocity
	}

	getHalfDiagonal(): number {
		return this.halfDiagonal
	}

	move(): void {
		const [x, y] = this.position
		const [vx, vy] = this.velocity
		this.position = [x + vx, y + vy]
	}

	draw(ctx: CanvasRenderingContext2D): void {
		const { position, angle, halfDiagonal } = this
		const radius = halfDiagonal
		ctx.fillStyle = 'GoldenRod'
		ctx.beginPath()
		ctx.moveTo(
			...orbitalPosition(position, radius, angle + degreesToRadians(30)),
		)
		ctx.lineTo(
			...orbitalPosition(position, radius, angle + degreesToRadians(150)),
		)
		ctx.lineTo(
			...orbitalPosition(position, radius, angle + degreesToRadians(210)),
		)
		ctx.lineTo(
			...orbitalPosition(position, radius, angle + degreesToRadians(330)),
		)
		ctx.closePath()
		ctx.fill()
	}
}
