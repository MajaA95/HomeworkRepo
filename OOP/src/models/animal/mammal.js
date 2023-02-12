
console.log("main class"); // da proveram dali mi e povrzan js

export default class Mammal {

    static Gender ={
        MALE:"male",
        FEMAIL: "female"
    }
    constructor(name,age, gender){

 

         this.type = this.constructor.name; // referencira na konstruktor ime na konstruktor
        this.numberOfLegs;
        
        this.gender= gender;
        this.name = name;
        this.age = age;

        this.drinksMilk = true;
        this.hasWarmBlood = true;
        this.numberOfEyes = 2;
        this.breaths = true;
        this.isAlive= true;
    }
    die(causeOfDeath = "natural causes"){
        this.isAlive = false;
        this.hasPulse = false;
        this.breaths = false;
        
        this.causeOfDeath = causeOfDeath;
    }
}