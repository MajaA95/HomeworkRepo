import Human from "./human.js";

export default class Farmer extends Human{
    constructor(name,age,gender){
        super(name,age,gender);

        this.worksHard = true;
        this.haveAnimals = true;
        this.loveAnimals = true;
        this.goToSchool = false;
    }
}