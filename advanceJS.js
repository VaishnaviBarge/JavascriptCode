
/*
closure
A closure is the combination of a function bundled 
together (enclosed) with references to its surrounding
state (the lexical environment). In other words, a closure
gives a function access to its outer scope. In JavaScript,
closures are created every time a function is created,
at function creation time. */
function outer(){
    let counter = 0
    return function(){
        counter++
        return counter
    }
}

let increment = outer()
/*console log(increment());
console.log(increment());
console.log(increment());
console. log(increment());*/

//===========================================
/* 
Promise 
promise is always created by the new keyword
promise takes the callback which actually takes two parameters(resolve and reject )
resolve when every thing goes success.
reject  when not able to fetch data successfully it is linked with the .catch
*/

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = false;
            if(success){
                resolve("data fetched successfully !")
            }
            else{
                reject("Error fetching data")
            }
        },3000);
    });
}

fetchData()
    .then((data)=>{
        // console.log(data);
        return data;
    })
    .then((value)=>{
        // console.log(value);
        
    })
    .catch((error)=>{});
        // console.error(error)

//=========================================================
//Prototypal Inheritance 
/* JavaScript objects are dynamic "bags" of properties 
(referred to as own properties). JavaScript objects have 
a link to a prototype object. When trying to access a 
property of an object, the property will not only be sought
on the object but on the prototype of the object, 
the prototype of the prototype, and so on until either a 
property with a matching name is found or the end of the 
prototype chain is reached. */

function Person(name){
    this.name=name;
}

Person.prototype.greet= function(){
    // console.log(`hello my name is ${this.name}`);
}

let vaishnavi=new Person('Vaishnavi');
vaishnavi.greet();

//===============================================
/* this Keyword */

const person={
    name: "Vaishnavi",
    greet(){
        // console.log(`Hi ${this.name} is here `);
    },
};
//case 1
// person.greet();
const greetFuntion = person.greet
//case 2
// greetFuntion()
/* For a given function, creates a bound function that has the 
same body as the original function. The this object of the bound 
function is associated with the specified object, and has the 
specified initial parameters.
@param thisArg — An object to which the this keyword can refer
 inside the new function.
@param argArray — A list of arguments to be passed to the new 
function. */
const boundGreet = person.greet.bind({ name: "Radhika"});
//case 3
// boundGreet();
/* (method) Function.call(this: Function, thisArg: any, ...argArray: any[]): any
Calls a method of an object, substituting another object
 for the current object.
@param thisArg — The object to be used as the current object.
@param argArray — A list of arguments to be passed to the
 method. */
const callGreet = person.greet.call({name: "Anurag"});
// console.log(callGreet);

/* (method) Function.apply(this: Function, thisArg: any, argArray?: any): any
Calls the function, substituting the specified object for the this value of the
 function, and the specified array for the arguments of the function.
@param thisArg — The object to be used as the this object.
@param argArray — A set of arguments to be passed to the 
function. */
const applyGreet = person.greet.apply({name: "Rohit"});


//Async 

function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            // resolve({name:"gangu", url: "https://Gangu.com"}),
            reject({error: "Data Not Found !"});
        }, 3000);
    })
}

async function getUserData(){
     try {
        console.log('Fetching user data ...');
        const userData = await fetchUserData();
        console.log("User Data :",userData);
     } catch (error) {
        console.log("Error Fetching Data", error);
     }
}

// getUserData();

//async await

function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data Fetched")
        }, 4000);
    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("comment Data Fetched")
        }, 5000);
    })
}

async function getBlogData() {
    try{
        console.log("Fetching blog data");
        // const blogData =await fetchPostData();
        // const commentData = await fetchCommentData();
        const [postData, commentData]=await Promise.all([
            fetchPostData(),
            fetchCommentData(),
        ]);
        console.log(postData);
        console.log(commentData);
        
        
        console.log("fetch Complete");
    }catch(error){
        console.error("Error fetching blog data",error);
    }
}
getBlogData();