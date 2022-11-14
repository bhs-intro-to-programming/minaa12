


const getX = (object) => {
  return object.x
}

const point = (xx, yy) => {
  return { x: xx, y: yy }
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

const sumSalaries  = (objs) => {
  let s = 0
  for (let i = 0; i < objs.length; i++) {
    s = s + objs[i].salary
  }
  return s 
}

