import Animal from "./animal.js";

export default class Horse extends Animal {
    constructor(name,age,gender){
        super(name,age,gender);

        this.numberOfLegs = 4;
        this.gallops = true;
        this.hasGrive = true;

    }
    gallop(soundOfGallopong = "tk tk tk"){
        console.log(soundOfGallopong);
    }
    run(soundOfRunning = "tgdk tgdk tgdk"){
        console.log(soundOfRunning);
    }

}