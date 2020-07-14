import Disappearable from './Disappearable'
import Drawable from './Drawable'
import Movable from './Movable'
import Polygon from './Polygon'
import orbitalPosition from '../service/orbitalPosition'
import degreesToRadians from '../service/degreesToRadians'

export default class Bullet
	implements Disappearable, Drawable, Movable, Polygon {
	private _centerPosition: [number, number]
	private _angle: number
	private _velocity: [number, number]
	private _halfDiagonal: number

	public constructor(
		centerPosition: [number, number],
		angle: number,
		speed: number,
	) {
		this._centerPosition = centerPosition
		this._angle = angle
		this._velocity = [Math.cos(angle) * speed, -Math.sin(angle) * speed]
		this._halfDiagonal = 15
	}

	public get centerPosition() {
		return this._centerPosition
	}

	public get angle() {
		return this._angle
	}

	public get velocity() {
		return this._velocity
	}

	public get halfDiagonal() {
		return this._halfDiagonal
	}

	public get vertexes() {
		return [
			orbitalPosition(
				this.centerPosition,
				this.halfDiagonal,
				this.angle + degreesToRadians(30),
			),
			orbitalPosition(
				this.centerPosition,
				this.halfDiagonal,
				this.angle + degreesToRadians(150),
			),
			orbitalPosition(
				this.centerPosition,
				this.halfDiagonal,
				this.angle + degreesToRadians(210),
			),
			orbitalPosition(
				this.centerPosition,
				this.halfDiagonal,
				this.angle + degreesToRadians(330),
			),
		]
	}

	public move(): void {
		const [x, y] = this.centerPosition
		const [vx, vy] = this.velocity
		this._centerPosition = [x + vx, y + vy]
	}

	public disappearedFrom({
		offsetWidth,
		offsetHeight,
	}: HTMLCanvasElement): boolean {
		return (
			this.vertexes.find(
				([x, y]: [number, number]) =>
					x >= 0 && x <= offsetWidth && y >= 0 && y <= offsetHeight,
			) === undefined
		)
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		const { vertexes } = this
		ctx.fillStyle = 'GoldenRod'
		ctx.beginPath()
		ctx.moveTo(...vertexes[0])
		ctx.lineTo(...vertexes[1])
		ctx.lineTo(...vertexes[2])
		ctx.lineTo(...vertexes[3])
		ctx.closePath()
		ctx.fill()
	}
}
