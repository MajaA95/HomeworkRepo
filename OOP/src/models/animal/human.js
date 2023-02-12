import Mammal from "./mammal.js";

export default class Human extends Mammal{
    constructor(name,age,gender){
    super(name,age,gender);

    this.speaks = true;
    this.goToSchool = true;
    this.numberOfLegs = 2;
    this.gender = "male";
    }

    goToSchool(schools = "Middle school, High school"){
        console.log(schools)
        
    }

}