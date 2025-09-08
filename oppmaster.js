let car ={
    make:"tata",
    model:"nano",
    year: "2007",
    start : function () {
        return `${this.make} car got started in ${this.year}`;
    },
};

// console.log(car.start());


//======================================= Inharitance

class Vehicle{
    constructor(make, model){
        this.make=make
        this.model=model
    }

    start(){
        return `${this.model} is car fron ${this.make} `;
    }
}


class Car extends Vehicle {
    drive(){
        return `${this.make} : this is an inheritance example`;
    }
}

let myCar =new Car("toyota","corolla");

// console.log(myCar.start());
// console.log(myCar.drive());

// =========================================Encapsulation

class BankAccount{
    #balence=0;

    deposit(amount){
        this.#balence+=amount;
        return this.#balence;
    }

    getBalence(){
        return`$ ${this.#balence}`;
    }
}

let account =new BankAccount()


//============================================Abstactions

 
class CoffeeMachine{
    start(){
        //callsDB
        //...
        //...
        return `start machine....`
    }

    brewCoffee(){
        //...
        //;;;;
        //...
        return `brewing coffee`
    }


    pressStart(){
        let msg1=this.start();
        let msg2=this.brewCoffee();
        return `${msg1} + ${msg2}`
    }
}

let MyMech= new CoffeeMachine()
// console.log(MyMech.start());
// console.log(MyMech.brewCoffee());

// console.log(MyMech.pressStart());

//========================================= Polymorphism

class Bird{
    fly(){
        return `hey I a flying ...`
    }
}

class Penguin extends Bird
{
    fly(){
        return `penguins can't fly`;
    }
}

let bird = new Bird()
let penguin = new Penguin();

// console.log(bird.fly());
// console.log(penguin.fly());


class Claculator{
    static add(a,b){
        return a+b;
    }
}

let miniCalc = new Claculator()

// console.log(miniCalc.add(2,3));


// console.log(Claculator.add(3,4));


//=====================================getters and setters 


class Employees{
    #salary;
    constructor(name,salary){
        if(salary<0){
            throw new Error("Salary can't be negative ");
        }
        this.name=name
        this.#salary=salary
    }

    get salary(){
        return `you are not allowed to get the salary `;
    }

    set salary(value){
        if(value<0){
            console.error("Invalid Salary ");
            
        }
        else{
            this.salary=value
        }
    }
}

let emp= new Employees("Alice", 50000);
console.log(emp._salary);
emp.salary =6000;























