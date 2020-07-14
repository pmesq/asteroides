import Positionable from './Positionable'

export default interface Polygon extends Positionable {
	vertexes: [number, number][]
}
