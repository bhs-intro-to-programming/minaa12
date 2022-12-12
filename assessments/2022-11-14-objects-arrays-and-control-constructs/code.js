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
  if (p1.x === p2.x && p1.y === p2.y) return true 
};

const totalWithTip = (bill, tipPercentage) => {
  return {subtotal: bill, tip: tipPercentage + subtotal, total: tip}
};

const isWinner = (player) => {
  if (player.score > 100) return true 
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
