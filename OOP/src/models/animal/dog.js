import Animal from "./animal.js";

export default class Dog extends Animal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.numberOfLegs = 4;
        this.barks = true;
    }

    bark(whatToBark = 'bark bark bark') {
        if (!this.isAlive) return;

        if (this.name == 'Sarko') {
            whatToBark = 'Sarko ne lae na domasni'
        }
        console.log(whatToBark);
    }

    die(causeOfDeath = 'kola go zgazilo') {
        super.die(causeOfDeath);
        this.barks = false;
        clearInterval(this.dogInterval);


    }



}

//if(!this.isAlive)  Ako ne e zivo sto e isto i (this.isAlive === false)

// vo metodi prvo negativni scenarija 

//setInterval odi so clearInterval obavezno