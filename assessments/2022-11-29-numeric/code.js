const totalEggs = (hard, soft) => {
  return hard + soft 
}

const chocolatesPerPerson = (chocolate, people) => {
  return Math.floor(chocolate/people)
}
const extraChocolates = (chocolates, people) => {
  return chocolates - people * chocolatesPerPerson(chocolates, people) 
}

const leftOut = (c, p) => {
if (c > p) return 0
return p - c
}

const probabilityAllHeads = (numberofflips) => {
return .5 ** numberofflips
}

const futureHour = (currenthour, future) => {
  return (currenthour + future) % 24
}

const presentBudget = (numberoffriends, averageprice) => {
  return numberoffriends * averageprice 
}

const perPresent = (totalmoney, presents) => {
  return totalmoney/presents
}

const wrapingCombos = (paper, ribbons, bows) => {
  return paper * ribbons * bows
}

const biggestNumber = (digits) => {
  return Math.max(digits)
}