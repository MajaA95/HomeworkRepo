import Dog from "./dog.js";

export default class Pudlica extends Dog{
    constructor(name,age,gender){
    super(name,age,gender);
    this.type


}
bark(whatToBark = "ciu ciu"){
    super.bark(whatToBark);
    this.showsTeeth = true;

}

}