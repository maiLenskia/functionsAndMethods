function dungeonest(input) {
    let rooms = input[0].split('|')
    let isAlive = true;
    let playerHealth = 100;
    let coins = 0;
    let roomsCount = 0;

    // Loop for rooms
    for (let room of rooms) {
        roomsCount++;
        let command = room.split(' ')[0];
        let number = Number(room.split(' ')[1]);

        if (command === 'potion') {
            drinkPointion(number);
        } else if (command === 'chest') {
            colectCoins(number);
        } else {
            isAlive = fight(command, number);

            if (!isAlive) {
                break;
            }
        }
    }

    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${playerHealth}`);
    }

    // Function for health capacity

    function drinkPointion(health) {
        let increaseHealth = Math.min(playerHealth + health, 100);

        // if (increaseHealth > 100) {
        //     increaseHealth = 100;
        // }

        console.log(`You healed for ${increaseHealth - playerHealth} hp.`);
        playerHealth = increaseHealth;
        console.log(`Current health: ${playerHealth} hp.`);
    }
    // Function for coin colection
    function colectCoins(value) {
        coins += value;
        console.log(`You found ${value} coins.`);
    }
    // Function for monsters fight
    function fight(monster, damage) {
        let decreaseHealth = playerHealth - damage;
        // Ако съм убит
        if (decreaseHealth <= 0) {
            console.log(`You died! Killed by ${monster}.`)
            console.log(`Best room: ${roomsCount}`)

            return false;
        }
        // If im a live
        playerHealth = decreaseHealth;
        console.log(`You slayed ${monster}.`)

        return true;
    }
}
dungeonest(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])