// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rectangle) => {
  return rectangle.width * rectangle.height
};

const higherPaid = (e1, e2) => {
if (e1.salary > e2.salary) return e1 
else return e2
};

const isSamePoint = (p1, p2) => {
  if (p1.x === p2.x && p1.y === p2.y) { return true 
  } 
  else return false
};

const totalWithTip = (bill, tipPercentage) => {
  let t = (tipPercentage * bill.subtotal)
  return {subtotal: bill.subtotal, tip: t, total: t + bill.subtotal}
};

const isWinner = (player) => {
  if (player.score > 100) { 
    return true
  }
  else {
    return false
  }
};

const updateWins = (players) => {
for (let i = 0; i < players.length; i++) {
  if (isWinner(players[i])) {
    players[i].wins++
  }
}
return undefined 
};

// players is an array of objections
// each object has a .score and .wins property
// this function returns a new array of objects (players) that have 
// 10 wins

const bigWinners = (players) => {
  let m = []
for(let i = 0; i < players.length; i++) {
  if (players[i].wins > 10) {
  m.push(players[i])
  } 
}
return m
};

//has matrix argument
//starts with all 0's
//replace each 0 with i * j 
const fillTimesTable = (table) => {
for (let i = 0; i < table.length; i++ ) {
  for (let j = 0; j < table.length; j++) {
    table[i][j] = (i + 1) * (j + 1)
  }
}
};

const sums = (n) => {
  let r = [0]
  for (let i = 1; i < n + 1; i++) {
   r[i] = r[i - 1] + i
  }
  return r 
};

const rule110 = (cells) => {
};
