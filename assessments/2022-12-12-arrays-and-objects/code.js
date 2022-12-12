const makeRow = () => {
  let s = []
  for(let i = 0;  i < 3; i++) {
    s.push('')
  }
  return s
}

const makeBoard = () => {
  
}

// s specifies 'X' or 'O'
// r specifies a row
// c specifies a column 
const makeMove = (s, r, c ) => {
  return {mark: s, row: r, column: c}
}

const placeMark = () => {

}

const allTheSame = (a) => {
  for(let i = 0; i < a.length; i++) {
    if (a[0] === a[1] && a[0] === a[2]) { return true
    }
    else return false
  }
}

const extractColumn = () => {

}

const recordMove = (array, objm) => {
  let t = [] 
  for(let i = 0; i < array.length; i++) {
    array.push(objm)
  }
  return t
}