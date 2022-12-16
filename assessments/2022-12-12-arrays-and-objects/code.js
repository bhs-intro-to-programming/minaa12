const makeRow = () => {
  let s = []
  for (let i = 0; i < 3; i++) {
    s.push('')
  }
  return s
}

const makeBoard = () => {
let x = []
  for (let i = 0; i < 3; i++) {
    x.push(makeRow())
  }
  return x
}

// s specifies 'X' or 'O'
// r specifies a row
// c specifies a column 
const makeMove = (s, r, c) => {
  return { mark: s, row: r, column: c }
}

const placeMark = (array, obj) => {

}

const allTheSame = (a) => {
  for (let i = 0; i < a.length; i++) {
    if (a[0] === a[1] && a[0] === a[2]) {
      return true
    }
    else return false
  }
}

const extractColumn = (array, index) => {

}

const recordMove = (array, objm) => {
  let t = []
  for (let i = 0; i < array.length; i++) {
    array.push(objm)
  }
  return t
}
let moves = [];
recordMove(moves, makeMove('X', 1, 2));

const rowForMove = (array, n) => {

}

const placeMoves = (array, moves) => {
  
}