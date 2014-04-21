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
    super.attack(character);
    // Can also be written as:
    // super(character);
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
}

export { Monster, Character };
