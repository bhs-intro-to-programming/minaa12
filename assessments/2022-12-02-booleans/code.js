const needHeavyCoat = (outside, cold) => {
  return outside && cold
}

const needSunscreen = (beach, skiing) => {
  return beach || skiing
}

const needMittens = (outside, warm) => {
  return outside && !warm 
}

const isVenomous = (striped, blue) => {
  return 
}

const okaySpeed = (sl, speed) => {
  if (speed < sl) { return true 
  } 
  else return false
}

const twiceAsExpensive = (p1, p2) => {
  if (p1 > p2 * 2 ) { return true
  } 
  else return false
}

const winningRecord = (win, loss, tie) => {
  return 
}

const isMagicNumber = (n) => {
  if (n === 42 || 17) return true 
}