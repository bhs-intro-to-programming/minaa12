
const yesIfEven = (n) => {
  if (n % 2 === 0) { return 'yes'
  }
  else return 'no'
}

const countXs = (s) => {
  let x = 0


}

const timesTable = (n) => {

}

const containsX = (s) => {
  for(let i = 0; i < s.length; i++) {
    if (s === s.indexOf('x')) { return true
    }
    else return false
  }
}
 
//const containsX = (s) => {
  if (s.indexOf('x')) { return true
  }
else return false
}

const sumSquares = (n) => {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum = sum + i**2 
  }
  return sum
}