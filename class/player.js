class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        const roomItem = this.currentRoom.items.findIndex(item => item.name = itemName);
        if (roomItem != -1 ) {
            const item = this.currentRoom.items.splice(roomItem, 1)[0];
            this.items.push(item);
        } else {
            return false;
        }

    }


    dropItem(itemName) {
        const roomItem = this.items.findIndex(item => item.name = itemName);
        if (roomItem != -1) {
            const item = this.items.splice(roomItem, 1)[0];
            this.currentRoom.items.push(item)
        } else {
            return false
        }
    }

    eatItem(itemName) {
        const item = this.getItemByName(itemName);
        if(item && item.eat) {
            item.eat(this);
            return true;
        } else {
            return false;
        }
    }


    getItemByName(name) {
        return this.items.find(itemName => itemName = name);
    }
}

module.exports = {
  Player,
};
