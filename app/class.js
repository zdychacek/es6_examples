class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Monster extends Character {
  constructor (x, y, name) {
    super(x, y);
    this.name_ = name;
    this.health_ = 100;
  }

  attack (character) {
    // super(character);
    super.attack(character);
  }

  get name () {
    return this.name_;
  }

  get isAlive () {
    return this.health_ > 0;
  }

  get health () {
    return this.health_;
  }

  set health (value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }

  // static method
  static createNewMonster () {
    return new Monster(...arguments);
  }
}
expect(Monster.createNewMonster).to.be.instanceof(Function);

var myMonster = new Monster(0, 10, 'Joe');
expect(myMonster.name).to.be.equal('Joe');

export { Monster, Character };
