
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
  return s.slice(0,1)
}
const secondHalf = (s) => {
  return s.slice(s.length/2, s.length)
}
const stringContains = (s1,s2) => {
  if (s1.indexOf(s2) === (-1)) {
    return false 
  }
  return true
}

const findFnord = (s) => {
  return s.indexOf('fnord')
  }

  const firstHalf = (s) => {
    return s.slice (0,s.length/2)
  }

  const firstAndLast = (s) => {
    return s.slice (0,1) + s.slice (s.length-1)
  }

  const upDown = (s) => {
    return s.toUpperCase() + s.toLowerCase()
  }

  const swapFrontAndBack = (s) => {
    return s.slice (s.length/2, s.length) + s.slice (0, s.length/2)
  }

 const firstName = (name) => {
   let n1 = name.slice(0, name.indexOf(' '))
   return n1
 }

 const lastName = (fn) => {
   let n2 = fn.slice(fn.indexOf(' ') + 1, fn.length)
   return n2
 }

 const upDownLastCharacter = (s) => {
   return s.slice (s.length-1).toUpperCase() + s.slice (s.length-1).toLowerCase()
 }

 const concatenate = (s1, s2) => {
   return s1 + s2
 }

 const everyOther = (s) => {
   return s[0] + s[2] + s[4]
 }

 const sameIgnoringCase = (s1, s2) => {
   if (s1.toUpperCase() === s2.toUpperCase()) { 
     return true }
     else return false
 }

 const simplePigLatin = (word, number) => {
   return
 }