const totalEggs = (hard, soft) => {
  return hard + soft 
}

const chocolatesPerPerson = (chocolate, people) => {
  return (chocolate/people)
}
const extraChocolates = (chocolates, people) => {
  return chocolates % people
}

const leftOut = (chocolates, people) => {
  let people = 0 
  if (chocolates/people > 0) return people
  else return false
}