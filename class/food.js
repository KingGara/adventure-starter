const { Item } = require('./item');

class Food extends Item {
  constructor(name, description) {
    super(name, description)
  }

  eat(player) {
    const index = player.items.indexOf(this);
    if (index !== -1) {
      player.items.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
}





module.exports = {
  Food,
};
