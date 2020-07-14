import Drawable from './Drawable'

export default class Background implements Drawable {
	private image: HTMLImageElement

	public constructor({ offsetWidth, offsetHeight }: HTMLCanvasElement) {
		this.image = new Image(offsetWidth, offsetHeight)
		this.image.src =
			'https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'
	}

	public draw(ctx: CanvasRenderingContext2D) {
		const { offsetWidth, offsetHeight } = ctx.canvas
		ctx.drawImage(this.image, 0, 0, offsetWidth, offsetHeight)
	}
}
