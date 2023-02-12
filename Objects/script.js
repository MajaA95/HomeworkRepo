//Metodi se funkcii vnatre vo objekt

console.log(typeof document);
console.log(typeof document.getElementById);
console.log(typeof []);
console.log(typeof [].push);
console.log(typeof console);
console.log(typeof console.log);
console.log(typeof window);
/*
console.log(this); 

function whatIsthis (){      //
    console.log(this);
}
*/


function Food(foodName, foodColor){
    this.name =foodName;                   //objekt konstruktor (properti)
    this.color = foodColor;
}

function Dog(dogName, dogColor, dogAge,dogFavoriteFood){
    this.name = dogName === undefined ? "unnamed" : dogName;
    this.color = dogColor;
    this.favoriteFood =
    dogFavoriteFood === undefined
    ? [new Food("Bacon","red")]
    : dogFavoriteFood;
    this.bark = function (){
        console.log("barkk");

    };
    this.eat = function(food){
        this.favoriteFood.forEach((fav)=>{
            fav.name.toLowerCase() === food.toLowerCase() //na toa sto e vneseno dali se mali
            ? console.log(food+"My fav food")
            : "";
        })
    console.log("nomnomnom");
    }
    
}
const porkThighs = new Food("pork","pink");             //nizata od food referenca ima sto ke se sluci posle dule
const apple = new Food("apple", "green");

const dule = new Dog("")

console.log(dule);

////////////klasiiiii  entitet e klasa

