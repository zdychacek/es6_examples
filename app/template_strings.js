// Multiline strings
expect(`In JavaScript this is
  not legal.`).to.have.string('\n');

var name = 'Bob';
var time = 'today';

expect(`Hello ${name}, how are you ${time}?`).to.be.equal('Hello Bob, how are you today?');
