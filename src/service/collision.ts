import Circle from '../model/Circle'
import Polygon from '../model/Polygon'
import distance from './distance'

export default (circle: Circle, polygon: Polygon): boolean => {
	return (
		polygon.vertexes.find(
			vertex => distance(circle.centerPosition, vertex) <= circle.radius,
		) !== undefined
	)
}
