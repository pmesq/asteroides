import Drawable from './Drawable'

export default class GameOverText implements Drawable {
	public draw(ctx: CanvasRenderingContext2D): void {
		const { width, height } = ctx.canvas

		const gameOverText = 'Fim de jogo'
		const gameOverX = width / 2
		const gameOverY = height / 2

		ctx.lineWidth = 1

		ctx.font = 'bold 80px Roboto'
		ctx.textAlign = 'center'

		ctx.fillStyle = 'White'
		ctx.fillText(gameOverText, gameOverX, gameOverY, width)
		ctx.strokeStyle = 'Black'
		ctx.strokeText(gameOverText, gameOverX, gameOverY, width)

		const clicToRestartText = 'Clique para reiniciar'
		const clicToRestartX = width / 2
		const clicToRestartY = height / 2 + 60

		ctx.font = 'bold 40px Roboto'
		ctx.textAlign = 'center'

		ctx.fillStyle = 'White'
		ctx.fillText(clicToRestartText, clicToRestartX, clicToRestartY, width)
		ctx.strokeStyle = 'Black'
		ctx.strokeText(clicToRestartText, clicToRestartX, clicToRestartY, width)
	}
}
