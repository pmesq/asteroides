import Drawable from './Drawable'
import Polygon from './Polygon'
import orbitalPosition from '../service/orbitalPosition'
import degreesToRadians from '../service/degreesToRadians'

export default class Spaceship implements Drawable, Polygon {
	private _centerPosition: [number, number]
	private _angle: number

	public constructor(position: [number, number]) {
		this._centerPosition = position
		this._angle = Math.PI / 2
	}

	public get centerPosition() {
		return this._centerPosition
	}

	public set centerPosition(centerPosition: [number, number]) {
		const [oldX, oldY] = this.centerPosition
		const [newX, newY] = centerPosition
		const [dx, dy] = [oldX - newX, oldY - newY]
		const d = Math.sqrt(dx * dx + dy * dy)
		if (d > 5) {
			this._angle = Math.atan2(oldY - newY, newX - oldX)
		}
		this._centerPosition = centerPosition
	}

	public get angle() {
		return this._angle
	}

	public get vertexes() {
		return [
			orbitalPosition(this.centerPosition, 20, this.angle),
			orbitalPosition(
				this.centerPosition,
				15,
				this.angle + degreesToRadians(135),
			),
			orbitalPosition(
				this.centerPosition,
				15,
				this.angle + degreesToRadians(225),
			),
		]
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		const { vertexes } = this
		ctx.strokeStyle = 'Black'
		ctx.fillStyle = 'HotPink'
		ctx.beginPath()
		ctx.moveTo(...vertexes[0])
		ctx.lineTo(...vertexes[1])
		ctx.lineTo(...vertexes[2])
		ctx.closePath()
		ctx.stroke()
		ctx.fill()
	}
}
