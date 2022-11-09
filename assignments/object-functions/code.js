
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

let rectangle = {
  width : 10,
  length : 20
}

const area = (r) => {
  return r.width * r.length
}
const joke = (o) => {
  return o.width**2
}
let rectangle2 = {
  width : 100,
  length : 100
}

console.log(area(rectangle2))
