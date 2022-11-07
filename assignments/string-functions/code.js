
const isAllUpperCase = (string) => {

  const isLowerCase = (character) => {
    return character >= 'a' && character <= 'z'
  }

  for (let i = 0; i < string.length;i++) {
   if (isLowerCase(string[i]) ) {
     return false
    } 
  }

   return true 
}

const capitalizeFirstThree = (s) => {
  return s.slice(0,3).toUpperCase() + s.slice(3).toLowerCase()
}

const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1).toLowerCase()
}

const lastThree = (s) => {
  return s.slice(s.length-3)
}
const firstThree = (s) => {
  return s.slice(0,3)
}

const allButFirstAndList = (s) => {
  return s.slice(1,s.length-1)
}
const allButFirst = (s) => {
  return s.slice(1,s.length)
}
const lastCharacter = (s) => {
  return s.slice(s.length-1)
}
const firstCharacter = (s) => {
  return s.slice(1)
}