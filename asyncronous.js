console.log("chaicode");

function sayHello() {
    console.log("I would like to have a tea !");
}

setTimeout(() => {
    console.log("look i am setting a timer ");
}, 4000);
setTimeout(() => {
    console.log(" 2nd timeout ");
}, 2000);
sayHello();
for (let I = 0; I < 100 ; I++) {
    console.log(I);
}