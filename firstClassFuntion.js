// Function Statement or Funtion Declaration
function a() {
    console.log("a called");
}

// Funtion Expression
var b = function () {
    console.log("b called");
} 

// Anonymous Funtion

/* function (){

} */

//Named Funtion Expression

var d = function name() {
    console.log();
}
 
// First Class Functions

const e= function(){
    return function fjh(){
        console.log("Hello");
    }
}
var f=e();
console.log(f());