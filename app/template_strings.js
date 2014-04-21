// Multiline strings
console.assert(
  `In JavaScript this is
  not legal.`.contains('\n'), 'String does not contain new line.');

var name = 'Bob';
var time = 'today';

console.assert(`Hello ${name}, how are you ${time}?` === 'Hello Bob, how are you today?', 'Messages are not equal.');
