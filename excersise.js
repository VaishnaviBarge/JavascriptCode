function Person() {
    
    function newPerson(name,age){
        if(age<0){
            throw new Error("Invalid Age !")
        }
        this.name=name
        this.age=age
    }
    function greet(){
        return `Hello, my name is ${this.name}`;
    }
}

console.log(Person.newPerson("Aryan",30));
console.log(Person.greet());
