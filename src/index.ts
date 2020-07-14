import Drawable from './model/Drawable'
import Bullet from './model/Bullet'
import Spaceship from './model/Spaceship'
import Asteroid from './model/Asteroid'
import Background from './model/Background'
import randomAsteroid from './service/randomAsteroid'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const background = new Background(canvas)
const spaceship = new Spaceship([
	canvas.offsetWidth / 2,
	canvas.offsetHeight / 2,
])
const bullets: Bullet[] = []
const asteroids: Asteroid[] = []

function gameLogic() {
	bullets.forEach((bullet, idx, all) => {
		bullet.move()
		if (bullet.disappearedFrom(canvas)) {
			all.splice(idx, 1)
		}
	})
	asteroids.forEach((asteroid, idx, all) => {
		asteroid.move()
		if (asteroid.disappearedFrom(canvas)) {
			all.splice(idx, 1)
		}
	})
}

function drawGame(ctx: CanvasRenderingContext2D, drawables: Drawable[]) {
	ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
	drawables.forEach(drawable => drawable.draw(ctx))
}

function gameLoop() {
	gameLogic()
	const drawables: Drawable[] = [
		background,
		...bullets,
		spaceship,
		...asteroids,
	]
	drawGame(ctx, drawables)
}

canvas.addEventListener('mousemove', ({ offsetX, offsetY }) => {
	spaceship.centerPosition = [offsetX, offsetY]
})

canvas.addEventListener('click', () => {
	const { centerPosition, angle } = spaceship
	bullets.push(new Bullet(centerPosition, angle, 5))
})

setInterval(() => {
	asteroids.push(randomAsteroid(canvas))
	asteroids.sort((a, b) => (a.radius < b.radius ? 1 : -1))
}, 500)

setInterval(gameLoop, 10)
