////////////////////////////////////////////////////////////////////////
// Scroll to the bottom to where it says "Write your code here ..." to actually
// write your code. Just above that is a list of Math functions that you might
// find useful. Everything before that you can safely ignore--I am providing
// functions and other constants you may need to use in our code but nothing
// that you need to change even necessarily understand the internals of. You
// will however need to understand how to use these functions and constants as
// described in the questions.

const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

/*
 * Log the object via console.log.
 */
const log = (x) => { console.log(x); }

/*
 * Record an okay object.
 */
const recordOk = (x) => { log(`OK: ${x}`); }

/*
 * Record a not-okay object.
 */
const recordNotOk = (x) => { log(`NOT OK: ${x}`); }

/*
 * Record a meh object.
 */
const recordMeh = (x) => { log(`MEH: ${x}`); }

/*
 * This one is some particular dark magic. Definitely don't worry about
 * what it's doing.
 */
const hash = (s) => {
  return [...JSON.stringify(s)]
    .reduce((hash, c) => ((hash << 5) + hash) + c.codePointAt(0), 5381);
};

/*
 * An arbitrary predicate on numbers you will use in one function.
 */
const isLeet = (n) => n % 1337 === 0;

/*
 * Return a random number between 0, inclusive, and 10,000, exclusive.
 */
const random10k = () => rand(10_000);

/*
 * Return true if the argument is "okay". This implementation treats roughly
 * half of all possible values as okay and the other half as not okay. Which are
 * which is essentially random but is stable.
 */
const isOk = (x) => hash(JSON.stringify(x)) % 2 == 0;

/*
 * Return true if the argument is "meh".
 */
const isMeh = (x) => !isOk(x) && hash(JSON.stringify(x)) % 3 == 0;

/*
 * Record a pair.
 */
const pair = (a, b) => {
  log(`pair: ${a},${b}`);
};

////////////////////////////////////////////////////////////////////////
// For your reference, here are some functions and constants from Math
// that you might find useful

// Math.PI - a constant giving the closest approximation of ?? available
// Math.abs(n) - a function that computes the absolute value of its argument
// Math.ceil(n) - a function that rounds its argument up to the nearest integer
// Math.floor(n) - a function that rounds its argument down to the nearest integer
// Math.max(a, b) - a function that returns the largest of its arguments
// Math.min(a, b) - a function that returns the smallest of its arguments
// Math.sqrt(n) - a function that returns the square root of its argument

////////////////////////////////////////////////////////////////////////
// Write your code here ...


//numerics

const biggestNumber = (digits) => {
  return 10 ** digits - 1 
} 

const totalEggs = (hard, soft) => {
  return hard + soft
}

const chocolatesPerPerson = (c, p) => {
  return Math.floor(c/p)
}

const extraChocolates = (chocolate, people) => {
  return people - chocolate (chocolatesPerPerson(chocolate, people)) 
}

const leftOut = (c, p) => {
if (c > p) return 0
return p - c
}

const probabilityAllHeads = (flips) => {
  return .5 ** flips
}

const futureHour = (current, future) => {
  return (current + future) % 24
}

const wrappingCombos = (p, b, r) => {
  return p *b * r 
}

const perPresent = (total, n) => {
  return total/n
}

const presentsBudget = (friend, price) => {
  return friend * price
}

//arrays

const isSamePoint = (p1, p2) => {
  if (p1.x === p2.x && p1.y === p2.y) { return true
  }
  else return false
}

const area = (r) => {
  return r.width * r.height
}

const totalWithTip = (o, n) => {
  let t = o.subtotal * n
  let all = o.subtotal + tip
  return {subtotal: o.subtotal, tip: t, subtotal: all}
}

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) { return e1
  }
  else return e2
}

const isWinner = (obj) => {
  if (obj.score > 100) { return true
  }
  else return false
}


const allTheSame = (array) => {
  if (array[0] === array[1] && array[1] === array[2]) { return true
  }
else return false
}

//controlconstructs

const threewayClassify = (v) => {
  if (v === okay) { return recordOk(v)
  }
  if (v === meh) { return recordMeh(v)
  }
  else return recordNotOk(v)
}

const classify = (v) => {
  if (v === isOk) { return recordOk(v)
  }
  else return recordNotOk(v)
}

const sumSquares = (n) => {
  let sum = 0
  for(let i = 0; i < n.length; i++) {
    sum = sum + i**2
  }
  return sum
}

const makeRow = () => {
  return ['', '','']
}

const makeBoard = () => {
  return [['', '', ''],['', '', ''],['', '', '']]
}

//strings

const firstFewEveryOther = (s) => {
  return s[0] + s[2] + s[4]
}

const firstHalf = (s) => {
  return s.slice(0, s.length/2)
}

const secondHalf = (s) => {
  return s.slice(s.length/2, s.length)
}

const swapFrontAndBack = (s) => {
  return secondHalf(s) + firstHalf(s)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

const upDownLastCharacter = (s) => {
  return s.slice(s.length - 1).toUpperCase() + s.slice(s.length - 1).toLowerCase()
}

const firstAndLast = (s) => {
  return s[0] + s[s.length - 1]
}

const isAllUpperCase = (s) => {
  if (s === s.toUpperCase()) { return true
  }
  else return false
}

const sameIgnoringCase = (s1, s2) => {
  if (s1 === s2) { return true
  }
  else return false
}

//booleans 

const fireAlarm = (pulled, smoke, planned) => {
  return pulled || smoke || planned
}

const canBePresident = (age, citezen, years) => {
  return age >= 35 && citezen && years >=14
}

const willSeeTweet = (follows, retweet, blocked) => {
  return follows || retweet || !blocked
}

const needHeavyCoat = (out, cold) => {
  return out && cold
}

const needSunscreen = (beach, ski) => {
  return beach || ski
}

const needMittens = (out, warm) => {
  return out && !warm
}

const canSleepIn = (weekday, vacation) => {
  if (!weekday || vacation) { return true
  }
  else return false
}

const evenGreaterThanZero = (n) => {
  if (n/2 === 0 && n > 0) return true
  else return false
}