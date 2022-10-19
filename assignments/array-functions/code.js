const countTens = (arrayofnumbers) => {
  let ntens = 0
  for (let i = 0; i < arrayofnumbers.length; i++) {
   if(arrayofnumbers[i] === 10) {
     ntens++
   }
  }
  return ntens
}
