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

};

const bigWinners = (players) => {

};

const fillTimesTable = (table) => {
};

const sums = (n) => {
  
};

const rule110 = (cells) => {
};
