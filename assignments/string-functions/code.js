
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