import Drawable from './Drawable'

export default class ScoreText implements Drawable {
	private _score: number

	public constructor(score: number) {
		this._score = score
	}

	public get score() {
		return this._score
	}

	public set score(score) {
		this._score = score
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		const { offsetWidth } = ctx.canvas

		const text = String(this.score)
		const x = offsetWidth - 20
		const y = 50
		const maxWidth = offsetWidth

		ctx.lineWidth = 1

		ctx.font = 'bold 40px Roboto'
		ctx.textAlign = 'right'

		ctx.fillStyle = 'White'
		ctx.fillText(text, x, y, maxWidth)
		ctx.strokeStyle = 'Black'
		ctx.strokeText(text, x, y, maxWidth)
	}
}
