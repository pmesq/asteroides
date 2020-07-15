import Circle from './Circle'
import Disappearable from './Disappearable'
import Drawable from './Drawable'
import Movable from './Movable'
import orbitalPosition from '../service/orbitalPosition'
import degreesToRadians from '../service/degreesToRadians'

export default class Asteroid
	implements Circle, Disappearable, Drawable, Movable {
	private _centerPosition: [number, number]
	private _velocity: [number, number]
	private _angularVelocity: number
	private _radius: number
	private _angle: number

	public constructor(
		centerPosition: [number, number],
		velocity: [number, number],
		angularVelocity: number,
		radius: number,
	) {
		this._centerPosition = centerPosition
		this._velocity = velocity
		this._angularVelocity = angularVelocity
		this._radius = radius
		this._angle = Math.PI / 2
	}

	public get centerPosition() {
		return this._centerPosition
	}

	public get velocity() {
		return this._velocity
	}

	public get angularVelocity() {
		return this._angularVelocity
	}

	public get radius() {
		return this._radius
	}

	public get angle() {
		return this._angle
	}

	public move(): void {
		const [x, y] = this.centerPosition
		const [vx, vy] = this.velocity
		this._centerPosition = [x + vx, y + vy]
		this._angle += this.angularVelocity
	}

	public disappearedFrom({
		offsetWidth,
		offsetHeight,
	}: HTMLCanvasElement): boolean {
		const [x, y] = this.centerPosition
		const { radius } = this
		return (
			x < -radius ||
			x > offsetWidth + radius ||
			y < -radius ||
			y > offsetHeight + radius
		)
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		const { centerPosition, angle, radius } = this
		ctx.lineWidth = 1
		ctx.strokeStyle = 'Black'
		ctx.fillStyle = 'rgb(180,180,180)'
		ctx.beginPath()
		ctx.arc(centerPosition[0], centerPosition[1], radius, 0, Math.PI * 2)
		ctx.closePath()
		ctx.stroke()
		ctx.fill()
		ctx.beginPath()
		const [x1, y1] = orbitalPosition(
			centerPosition,
			radius / 2,
			angle + degreesToRadians(135),
		)
		ctx.arc(x1, y1, radius / 10, 0, Math.PI * 2)
		ctx.closePath()
		ctx.stroke()
		ctx.beginPath()
		const [x2, y2] = orbitalPosition(
			centerPosition,
			radius / 3,
			angle + degreesToRadians(300),
		)
		ctx.arc(x2, y2, radius / 6, 0, Math.PI * 2)
		ctx.closePath()
		ctx.stroke()
		ctx.beginPath()
		const [x3, y3] = orbitalPosition(
			centerPosition,
			radius / 1.4,
			angle + degreesToRadians(90),
		)
		ctx.arc(x3, y3, radius / 7.5, 0, Math.PI * 2)
		ctx.closePath()
		ctx.stroke()
	}
}
