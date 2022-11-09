
const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { x: x, y: y }
}

const emptyObject = () => {
  return {}
}

const distance = (o1,o2) => {
  return Math.sqrt ((o2.x - o1.x)**2 + (o2.y - o1.y)**2)
}

const midpoint = (p1,p2) => {
  return { x: (p1.x + p2.x)/2, y: (p1.y + p2.y)/2}
}