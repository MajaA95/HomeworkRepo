import Horse from "./models/animal/horse.js";
import Human from "./models/animal/human.js";
import Pudlica from "./models/animal/pudlica.js";
import Dog from "./models/animal/dog.js";
import Musician from "./models/animal/musician.js";
import Worker from "./models/animal/worker.js";
import Farmer from "./models/animal/farmer.js";



const horse1 =new Horse("Tifany");
console.log(horse1); 
 
const human1 =new Human("Stefan",22);
console.log(human1); 

const pudlica1 = new Pudlica();
console.log(pudlica1);

const dog1 =new Dog();
console.log(dog1);

const musician1 = new Musician("Petar",35)
console.log(musician1);

const worker1 =new Worker("Filip",37)
console.log(worker1);
 
const farmer1 = new Farmer("Trajce",56,Farmer.Gender.MALE) 
console.log(farmer1);



  




