const biggestNumber = (digits) => {
  return 10 ** digits - 1 
} 

const totalEggs = (hard, soft) => {
  return hard + soft
}

const chocolatesPerPerson = (c, p) => {
  return Math.floor(c/p)
}

const extraChocolates = (c, p) => {
  return chocolatesPerPerson(c, p) 
}

const probabilityAllHeads = (flips) => {
  return .5 ** flips
}