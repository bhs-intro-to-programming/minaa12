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
  return (chocolatesPerPerson(c, p)) 
}

const probabilityAllHeads = (flips) => {
  return .5 ** flips
}

const futureHour = (current, future) => {
  return (current + future) % 24
}

const wrappingCombos = (p, b, r) => {
  return p *b * r 
}

const perPresent = (total, n) => {
  return total/n
}

const presentsBudget = (friend, price) => {
  return friend * price
}