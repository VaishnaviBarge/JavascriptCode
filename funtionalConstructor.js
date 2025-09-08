function Person(name, age ){
    this.name =name
    this.age=age
}

function Car(make, model){
    this.make=make
    this.model=model
}

let myCar = new Car("Toyota", "Camry");
// console.log(myCar);

let myNewCar = new Car("Tata","Safari");
// console.log(myNewCar);

function Tea(type){
    this.type=type
    this.describe = function(){
        return `this is a cup of ${this.type}`;
    };
}

let lemonTea=new Tea("lemon Tea");
// console.log(lemonTea.describe());



function Animal(species){
    this.species=species

}

Animal.prototype.sound=function(){
    return `${this.species} makes the sound`
}

let dog = new Animal("Dog");
// console.log(dog.sound());


function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword")
    }
    this.name=name;
}

let tea = new Drink("tea");
let coffee = new Drink("coffee");

function Animal(type){
    this.type=type
};

Animal.prototype.speak= function(){
    return `${this.type} make a sound`;
}

Array.prototype.vaishnavi=function(){
    return `Custome Method ${this}`;
};

let myArray =[1,2,3];

console.log(myArray.vaishnavi());
