// examples from https://github.com/lukehoban/es6features
import './arrows';
import './object_literals';
import './template_strings';
import './destructuring';
import './default_rest_spread';
import './block_bindings';
import './iterators_forof';
import './comprehensions';
import './new_api';

import { Monster as Creature, Character } from './class';

module math from './math_module';
import exp from './mathplusplus_module';
//import { sum, pi } from './math_module';
//module mathplusplus from './mathplusplus_module';

console.assert(exp(math.pi, math.e) === Math.exp(math.pi, math.e));

var twoPi = 2 * math.pi;

console.assert(math.sum(math.pi, math.pi) === twoPi);
//console.assert(sum(math.pi, math.pi) === twoPi);

let joeTheCreature = new Creature(0, 0, 'Joe');

console.assert(joeTheCreature.name == 'Joe', 'Creature\'s name isn\' Joe.');
