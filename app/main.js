/* Examples from:
 * https://github.com/lukehoban/es6features
 * https://github.com/google/traceur-compiler/wiki/LanguageFeatures
 */
import './arrows';
import './object_literals';
import './template_strings';
import './destructuring';
import './default_rest_spread';
import './block_bindings';
import './iterators_forof';
import './comprehensions';
import './new_api';
import './promises';
import './symbols';

import { Monster as Creature, Character } from './class';

module math from './math_module';
import exp from './mathplusplus_module';
//import { sum, pi } from './math_module';
//module mathplusplus from './mathplusplus_module';

expect(exp(math.pi, math.e)).to.be.equal(Math.exp(math.pi, math.e));

var twoPi = 2 * math.pi;

expect(math.sum(math.pi, math.pi)).to.be.equal(twoPi);
//expect(sum(math.pi, math.pi)).to.be.equal(twoPi);

let joeTheCreature = new Creature(0, 0, 'Joe');

expect(joeTheCreature).property('name').to.be.equal('Joe');
