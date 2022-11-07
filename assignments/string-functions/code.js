
const isAllUpperCase = (string) => {

  const isLowerCase = (character) => {
    return character >= 'a' && character <= 'z'
  }

  for (let i = 0; i < string.length;i++) {
   if (string[i].isLowerCase() ) {
     return false
    } 
  }

   return true 
}