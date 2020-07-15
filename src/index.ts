import Drawable from './model/Drawable'
import Bullet from './model/Bullet'
import Spaceship from './model/Spaceship'
import Asteroid from './model/Asteroid'
import Background from './model/Background'
import randomAsteroid from './service/randomAsteroid'
import collision from './service/collision'
import ScoreText from './model/ScoreText'
import GameOverText from './model/GameOverText'
import HpBar from './model/HpBar'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const background = new Background(canvas)
const spaceship = new Spaceship(
	[canvas.offsetWidth / 2, canvas.offsetHeight / 2],
	3,
)
const bullets: Bullet[] = []
const asteroids: Asteroid[] = []

let running = true
let score = 0

const hpBar = new HpBar(spaceship.hp, spaceship.hp)
const scoreText = new ScoreText(score)
const gameOverText = new GameOverText()

function resetGame() {
	bullets.splice(0)
	asteroids.splice(0)

	running = true
	score = 0
	spaceship.hp = 3

	canvas.style.cursor = 'none'
}

function finishGame() {
	running = false
	canvas.style.cursor = 'pointer'
}

function gameLogic() {
	bullets.forEach((bullet, bulletIdx, allBullets) => {
		bullet.move()
		if (bullet.disappearedFrom(canvas)) {
			allBullets.splice(bulletIdx, 1)
		}
	})
	asteroids.forEach((asteroid, asteroidIdx, allAsteroids) => {
		asteroid.move()
		if (asteroid.disappearedFrom(canvas)) {
			allAsteroids.splice(asteroidIdx, 1)
		}
		if (running && collision(asteroid, spaceship)) {
			spaceship.hp--
			allAsteroids.splice(asteroidIdx, 1)
		}
		const bulletIdx = bullets.findIndex(bullet =>
			collision(asteroid, bullet),
		)
		if (bulletIdx !== -1) {
			if (running) score++
			bullets.splice(bulletIdx, 1)
			allAsteroids.splice(asteroidIdx, 1)
		}
	})
	hpBar.hp = spaceship.hp
	scoreText.score = score
	if (spaceship.hp <= 0) finishGame()
}

function drawGame(ctx: CanvasRenderingContext2D) {
	ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
	const drawables: Drawable[] = [
		background,
		...bullets,
		spaceship,
		...asteroids,
		hpBar,
		scoreText,
	]
	if (!running) {
		drawables.push(gameOverText)
	}
	drawables.forEach(drawable => drawable.draw(ctx))
}

function gameLoop() {
	gameLogic()
	drawGame(ctx)
}

canvas.addEventListener('mousemove', ({ offsetX, offsetY }) => {
	if (running) {
		spaceship.centerPosition = [offsetX, offsetY]
	}
})

canvas.addEventListener('click', () => {
	if (running) {
		const { centerPosition, angle } = spaceship
		bullets.push(new Bullet(centerPosition, angle, 5))
	} else {
		resetGame()
	}
})

setInterval(() => {
	if (running) {
		asteroids.push(randomAsteroid(canvas))
		asteroids.sort((a, b) => (a.radius < b.radius ? 1 : -1))
	}
}, 500)

setInterval(gameLoop, 10)
