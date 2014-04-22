// Privacy based on symbols example and smbols based enums creation

// define some colours enums
let red = Symbol();
let green = Symbol();
let blue = Symbol();

// create new block scope to disable access to score variable
{
  let score = Symbol('score');

  class Player {
    constructor (name, teamColour) {
      this.name = name;
      this.teamColour = teamColour;

      // score is private member and can be accessed only with score symbol
      this[score] = 0;
    }

    get totalScore () {
      return this[score];
    }
  }
}

// create new instance of Player and test instance properties
var player = new Player('Ondrej', blue);

expect(player.teamColour).to.be.equal(blue);
expect(Object.keys(player)).to.be.an('array').and.not.to.contain('score');
