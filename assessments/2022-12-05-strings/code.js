const upToX = (s) => {
  return s.slice(0, s.indexOf('x'))
}

const charactersAround = (s, i) => {
  return s.slice(i - 1, i + 2)
}

const middle = (s) => {
  return s.slice(s.length/2 - 2, s.length - 2) 
}

const pair = (s1, s2) => {
  return s1 + (' ') + ('and') + (' ') + s2
}

const containsX = (s) => {
  if (s.indexOf('x')) { return true 
  }
  else return false
}

const slug = (s1, s2, s3) => {
  return s1.toLowerCase() + ('-') + s2.toLowerCase() + ('-') + s3.toLowerCase() 
}

const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1, s.length).toLowerCase()
}

const capitalizeName = (s) => {
  let n = s.slice(0, s.indexOf(' '))
  let x = s.slice(s.indexOf(' ') + 1, s.length)
  return capitalize(n) + (' ') + capitalize(x)
}