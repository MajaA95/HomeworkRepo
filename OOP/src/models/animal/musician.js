import Human from "./human.js";

export default class Musician extends Human{
    constructor(name,age,gender){
        super(name,age,gender);

        this.sings = true;
        this.playsGuitar = true;
        this.drinksMilk = false;

    }
sings(song = "Lalalala"){
        console.log(song);
}
}