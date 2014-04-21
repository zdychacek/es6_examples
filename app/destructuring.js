// list matching
var [ a, , b ] = [ 1, 2, 3 ];

console.assert(a === 1 && b === 3, 'Equality failed.');

function getASTNode () {
  return {
    op: '+',
    lhs: {
      op: '*'
    },
    rhs: '5'
  };
}

// object matching
var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

console.assert(
  a === getASTNode().op &&
  b === getASTNode().lhs.op &&
  c === getASTNode().rhs
, 'Equality failed.');

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var { op, lhs, rhs } = getASTNode();

var stringify = JSON.stringify;

console.assert(
  stringify(op) === stringify(getASTNode().op) &&
  stringify(lhs) === stringify(getASTNode().lhs) &&
  stringify(rhs) === stringify(getASTNode().rhs)
, 'Equality failed.');

// Can be used in parameter position
function g({ name: x }) {
  return x;
}

console.assert( g({ name: 5 }) === 5, 'Returned value is not 5.');

// Fail-soft destructuring
var [ a ] = [];
console.assert(a === undefined, 'Is not undefined.');
