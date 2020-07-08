import Drawable from './model/Drawable'
import Bullet from './model/Bullet'
import Spaceship from './model/Spaceship'
import Asteroid from './model/Asteroid'

const canvasEl = document.querySelector('canvas')
const ctx = canvasEl.getContext('2d')
const backgroundImage = new Image(600, 600)
backgroundImage.src =
	'https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'
const spaceship = new Spaceship([300, 300])
const bullets: Bullet[] = []
const asteroids: Asteroid[] = []

function drawGame(ctx: CanvasRenderingContext2D, drawables: Drawable[]) {
	ctx.clearRect(0, 0, 600, 600)
	ctx.drawImage(backgroundImage, 0, 0, 600, 600)
	drawables.forEach(drawable => drawable.draw(ctx))
}

function gameLoop() {
	bullets.forEach((bullet, idx, all) => {
		bullet.move()
		const [x, y] = bullet.getPosition()
		const halfDiagonal = bullet.getHalfDiagonal()
		const [minLimit, maxLimit] = [-halfDiagonal, 600 + halfDiagonal]
		if (x < minLimit || y < minLimit || x > maxLimit || y > maxLimit) {
			all.splice(idx, 1)
		}
	})
	asteroids.forEach((asteroid, idx, all) => {
		asteroid.move()
		const [x, y] = asteroid.getPosition()
		const radius = asteroid.getRadius()
		const [minLimit, maxLimit] = [-radius, 600 + radius]
		if (x < minLimit || y < minLimit || x > maxLimit || y > maxLimit) {
			all.splice(idx, 1)
		}
	})
	const spaceObjects: Drawable[] = [...bullets, spaceship, ...asteroids]
	drawGame(ctx, spaceObjects)
}

canvasEl.addEventListener('mousemove', event => {
	spaceship.setPosition([event.offsetX, event.offsetY])
})

canvasEl.addEventListener('click', () => {
	const position = spaceship.getPosition()
	const angle = spaceship.getAngle()
	const speed = 5
	const bullet = new Bullet(position, angle, speed)
	bullets.push(bullet)
})

setInterval(() => {
	const radius = Math.random() * 40 + 10
	const angularVelocity = Math.random() * 0.1 - 0.05
	const side = Math.floor(Math.random() * 4)
	let position: [number, number]
	let velocity: [number, number]
	switch (side) {
		case 0:
			position = [Math.random() * 600, -radius]
			velocity = [Math.random() * 3 - 1.5, Math.random() * 1.5]
			break
		case 1:
			position = [600 + radius, Math.random() * 600]
			velocity = [-Math.random() * 1.5, Math.random() * 3 - 1.5]
			break
		case 2:
			position = [Math.random() * 600, 600 + radius]
			velocity = [Math.random() * 3 - 1.5, -Math.random() * 1.5]
			break
		case 3:
			position = [-radius, Math.random() * 600]
			velocity = [Math.random() * 1.5, Math.random() * 3 - 1.5]
			break
	}
	asteroids.push(new Asteroid(position, velocity, angularVelocity, radius))
	asteroids.sort((a, b) => {
		return a.getRadius() < b.getRadius() ? 1 : -1
	})
}, 500)

setInterval(gameLoop, 10)
