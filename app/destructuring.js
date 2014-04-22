// list matching
var [ a, , b ] = [ 1, 2, 3 ];

expect(a).to.be.eql(1);
expect(b).to.be.eql(3);

function getASTNode () {
  return {
    op: '+',
    lhs: {
      op: '*'
    },
    rhs: '5'
  };
}

var node = getASTNode();

// object matching
var { op: a, lhs: { op: b }, rhs: c } = node;

expect(node).property('op').to.be.eql(a);
expect(node).deep.property('lhs.op').to.be.eql(b);
expect(node).property('rhs').to.be.eql(c);

// object matching shorthand
// binds `op`, `lhs` and `rhs` in scope
var { op, lhs, rhs } = node;

expect(op).to.be.eql(node.op);
expect(lhs).to.be.eql(node.lhs);
expect(rhs).to.be.eql(node.rhs);

// Can be used in parameter position
function createPerson({ name, age, place: residence }) {
  return { name, age, residence };
}
expect(createPerson({
  name: 'Ondrej',
  age: 26,
  place: 'Brno'
})).to.be.eql({
  name: 'Ondrej',
  age: 26,
  residence: 'Brno'
});

// Fail-soft destructuring
var [ a ] = [];
expect(a).to.be.undefined;
