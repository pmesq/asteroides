import Drawable from './Drawable'

export default class HpBar implements Drawable {
	private _maxHp: number
	private _hp: number

	public constructor(maxHp: number, hp: number) {
		this._maxHp = maxHp
		this._hp = hp
	}

	public get maxHp() {
		return this._maxHp
	}

	public set maxHp(maxHp) {
		this._maxHp = maxHp
	}

	public get hp() {
		return this._hp
	}

	public set hp(hp) {
		this._hp = hp
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		const squareSize = 30

		ctx.lineWidth = 2
		ctx.strokeStyle = 'White'
		for (let i = 0; i < this.maxHp; i++) {
			if (i < this.hp) ctx.fillStyle = 'DarkRed'
			else ctx.fillStyle = 'Black'
			ctx.fillRect(10 + squareSize * i, 10, squareSize, squareSize)
			ctx.strokeRect(10 + squareSize * i, 10, squareSize, squareSize)
		}
	}
}
