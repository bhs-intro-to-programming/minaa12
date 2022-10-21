const countTens = (arrayofnumbers) => {
  let ntens = 0
  for (let i = 0; i < arrayofnumbers.length; i++) {
    if (arrayofnumbers[i] === 10) {
      ntens++
    }
  }
  return ntens
}
const sum = (arrayofnumbers) => {
  let s = 0
  for (let i = 0; i < arrayofnumbers.length; i++) {
    s = s + arrayofnumbers[i]
  }
  return s
}
const evens = (arrayofnumbers) => {
  let e = []
  for (let i = 0; i < arrayofnumbers.length; i++) {
    if (arrayofnumbers[i] % 2 === 0) {
      e.push(arrayofnumbers[i])
    }
  }
  return e
}
const anyOverOneHundred = (arrayofnumbers) => {
  for (let i = 0; i < arrayofnumbers.length; i++) {
    if (arrayofnumbers[i] > 100) {
      return true
    }
  }
    return false

  }
const pyramid = (p) => {
  let a = []
  for (let i = 1; i <= p; i++) {
    for (let j = 0; j < 1; j++) {
          a.push(i)
    }
  }
  return a
}