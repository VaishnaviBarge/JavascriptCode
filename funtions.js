/* 
1. Write a funtion named `makeTea` that takes obe parameter
 `typeOfTea`, and return a string like `"Making green tea"`
 Store the result in a variable named `teaOrder` */

 function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
 }
let teaOrder=makeTea("green tea")
// console.log(teaOrder);

/* 
2. Create a funtion named orderTea that takes one parameter ,
`teaType`. Inside this funtion, create another funtion named 
`confirmOrder` that return a message like `"Order confirmed
 for chai"`.
 Call `confirmOrder` from within `orderTea` and return the 
 result
*/

 function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`
    } 
    return confirmOrder();
 } 
 let teaordered=orderTea("chai");
//  console.log(teaordered);
 
/*
3. Write an arrow funtion named `calculateTotal` that takes
two parameters: `price` and `quantity`. The funtion should 
return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/

const calculateTotal=(price,quantity)=>{
    return price*quantity
};
//or
// const calculateTotal=(price,quantity)=> price*quantity;
const totalCost=calculateTotal(20,30);
// console.log(totalCost);

/* 
4. Write a funtion named `processTeaOrder` that takes another
 funtion , `makeTea` as a parameter and calls it with the argument `"earl grey"`,
 Return the result of calling `makeTea`.   */

//Hier order funtion / First Class funtion
 
function makeTea(typeOfTea) {
    return `make tea : ${typeOfTea}`
}

function processTeaOrder(teaFuntion){
    return teaFuntion("earl grey")
}

let order= processTeaOrder(makeTea)
console.log(order);


/* 
5. Write a funtion named `createTeaMaker` that returns another
function. the returned funtions should take one parameter, `teaType`,
and return a message like `"Making green tea"`.
Store the returned funtion in a variable named `teaMaker` and
call it with `green tea`. 
*/

function createTeaMaker(){
    return function(teaType) {
        return `Making ${teaType}`
    };
}

let teaMaker=createTeaMaker();
console.log(teaMaker);
console.log(teaMaker("chai"));

