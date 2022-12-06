const upToX = (s) => {
  return s.slice(0, s.indexOf('x'))
}

const charactersAround = (s, i) => {
  return s.slice(i - 1) + (i + 1)
}

const middle = (s) => {
  return s.length/2
}

const pair = (s1, s2) => {
  return s1 + (' ') + ('and') + (' ') + s2
}

const containsX = (s) => {
  if (s === 'x') { return true 
else return false
  }
}