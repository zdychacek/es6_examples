Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN('NaN') // false

Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2

'abcde'.contains('cd') // true
'abc'.repeat(3) // 'abcabcabc'

class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
}

var myPoint = new Point(10, 20);

Object.assign(myPoint, { origin: new Point(0, 0) });

expect(myPoint).property('origin').to.be.defined;
