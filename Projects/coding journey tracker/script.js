class Creature {
  constructor(health = 100) {
    this.health = health;
  }

  sound() {
    console.log("crejeeee");
  }
}

class Dog extends Creature {
  sound() {
    console.log("wof");
  }
}

class Cat extends Creature {
  constructor() {
    super();
    this.health = 50;
  }
  sound() {
    console.log("meow");
  }
}

const cats = new Cat();
cats.health;
