import Animal from "./animal.js";   // JSSSSSSSS mora da se dopise


export default class Dog extends Animal {
    constructor(name,age,gender){
        super(name, age, gender);
        
        this.numberOfLegs = 4;
        this.barks = true;
    }
    bark(whatToBark = "bark bark bark"){
        // if(!this.isAlive) return;

        console.log(whatToBark)
    }
}

//if(!this.isAlive)  Ako ne e zivo sto e isto i (this.isAlive === false)

// vo metodi prvo negativni scenarija ako e nesto sto da vrati


//setInterval odi so clearInterval obavezno