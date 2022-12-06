const upToX = (s) => {
  return s.slice(0, s.indexOf('x'))
}

const charactersAround = (s, i) => {
  return s.slice(i - 1) + (i + 1)
}