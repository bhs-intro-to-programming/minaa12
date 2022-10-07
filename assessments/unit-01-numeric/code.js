// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.
const earnedRunAverage = (earnedruns, innings) => {
  return (earnedruns/innings) * 9 
}
const itemsLeftOver = (people, items) => {
  return items % people
}
const areaOfCircle = (radius) => {
  return Math.PI(radius)**2
}
const volumeOfCube = (edgeofcube) => {
  return edgeofcube**3
}
const populationGrowth = (size, growthrate) => {
 return size*growthrate 
}
const valueOfJewels = (diamonds, emeralds, diamondgold, emeraldgold) => {
  return (diamonds*diamondgold) + (emeralds*emeraldgold)
}
const payWithOvertime = (hours, hourrate, overtimerate) => {
  return (hours*hourrate) + overtimerate 
}
const firstClassPostage = (weighedounces) => {
  return 
}
