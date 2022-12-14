/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */

const lineOfCircles = (radius) => {
  let diameter = radius * 2;
  for (let x = 0; x * diameter + diameter < width; x++) {
    drawFilledCircle(radius + x * diameter + radius, height / 2, radius, 'red')
  }
};



//lineOfCircles(12)

const lineOfCirclesAlternating = (radius) => {
  let diameter = radius * 2;
  let m = 'red'
  for (let x = 0; x * diameter + diameter < width; x++) {
    drawFilledCircle(radius + x * diameter + radius, height / 2, radius, m)
    if (m == 'red') {
      m = 'blue'
    } else { m = 'red' }
  }
};

//lineOfCirclesAlternating(12)


