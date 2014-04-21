// list matching
var [ a, , b ] = [ 1, 2, 3 ];

expect(a).to.be.equal(1);
expect(b).to.be.equal(3);

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

var node = getASTNode();

expect(node).property('op').to.be.equal(a)
expect(node).property('lhs').property('op').to.be.equal(b);
expect(node).property('rhs').to.be.equal(c);

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var { op, lhs, rhs } = node;

expect(op).to.be.equal(node.op);
expect(lhs).to.be.deep.equal(node.lhs);
expect(rhs).to.be.equal(node.rhs);

// Can be used in parameter position
function g({ name: x }) {
  return x;
}
expect(g({ name: 5 })).to.be.equal(5);

// Fail-soft destructuring
var [ a ] = [];
expect(a).to.be.undefined;
