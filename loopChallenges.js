/* 
1. Write a `for` loop that loops through the array 
`["green tea", "black tea", "chai", "oolong tea"]` and stop
 the loop when it finds `"chai"`.
 Store all teas before `"chai"` in a new array named `selectedTea`.
 */
// console.log("hello");

let teaArray=["green tea", "black tea", "chai", "oolong tea"];
let selectedTea=[];
for (let index = 0; index < teaArray.length; index++) {
    if(teaArray[index]=="chai"){
       break;
    }
    selectedTea.push(teaArray[index]);
}
// console.log("selected tea is ",selectedTea);


/* 
2. Write a `for` loop that loops through the array 
["London", "New York","Paris","Berlin"] and skips `"paris"`.
Store the other cities in a new array named `visitedCities`.
 */

let cities=["London", "New York","Paris","Berlin"];
let visitedCities=[];

for (let index = 0; index < cities.length; index++) {
    if(cities[index].toLowerCase()==="paris"){
        continue;
    }
    visitedCities.push(cities[index]);
    
}

// console.log(visitedCities);

/* 
3. Use a "for-of" loop to iterate through the array `[1,2,3,4,5]`
 and stop when the number `4` is found.
   Store the number before `4` in an array named `smallNumber`.*/

let number=[1,2,3,4,5]
let smallNumber=[]
for (const num of number) {
    if(num==4){
        break;
    }
    smallNumber.push(num);
}
// console.log("smallNumber",smallNumber);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` 
and skip `"herbal tea"`.
Store the other teas in an array named `preferredTeas`.
*/

let teaType=["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas=[]
for (const tea of teaType) {
    if(tea=="herbal tea"){
        continue;
    }
    preferredTeas.push(tea)
}
// console.log(preferredTeas);


/* 
5. Use a `for-in` loop to loop through an object containing
 city populations.
 Stop the loop when the population of `"Berlin"` is found 
 and store all previous cities populations in a new object 
 name `cityPopulations`.
 */

 let cityPopulation={
    London:4836598,
    New_York:36492,
    berlin: 3747342,
    paris: 34000,
    
 }
 let Populations={}


 for (const city in cityPopulation) {
    if(city=="berlin"){
        break;
    }
    Populations[city]= cityPopulation[city]
    
 }
//  console.log(Populations);

 /* 
 6. Use a `for-in` loop to loop through an object containing
  city populations. 
  Skip any city with a population below 3 million and store 
  the rest in a new object named `largeCities`.
  
  let worldCities={
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
  };
  */

  let worldCities={
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
  };

  let worldPop={};

   for (const city in worldCities) {
    if(worldCities[city]<3000000){
        continue;
    }
    worldPop[city]= worldCities[city]
    
 }
//  console.log(worldPop);


/*
7. Write a "forEach" loop that itrates through the array
 `["earl grey", "green tea", "chai", "oolong tea"];
 Stop the loop when `"chai"` is found, and store all previous
  tea types in an array named `availableTeas 
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];

 let availableTeas=[]

 teaCollection.forEach(tea => {
    if(tea=="chai"){
        return ;
    }
    availableTeas.push(tea);
 });

//  console.log(availableTeas);
 
/* 
8. Write a "forEach" loop that itrates through the array
 `["earl grey", "green tea", "chai", "oolong tea"];
 Stop the loop when `"chai"` is found, and store all previous
  tea types in an array named `availableTeas 
*/

let myWorldCities=["hdbk","yegi","eyriuc","yemn"];
let traveledCities=[]
myWorldCities.forEach(city => {
    if(city === 'yegi'){
        return;
    }
    traveledCities.push(city);
});

// console.log(traveledCities);


/* 
9. Write a for loop that iterates through the array [2,5,7,9]
skip the value '7' and multiply the rest by 2. Store the result
in a new array named `doubledNumber`. */

let NumArray=[2,5,7,9];
let doubledNumber=[];

for (let i = 0; i < NumArray.length; i++) {
    if(NumArray[i]==7){
        continue;
    }
    doubledNumber.push(NumArray[i]*2);
}
// console.log(doubledNumber);


/* 
10. Use a for-of loop to iterate through the array 
["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
and stop when the length of the current tea is greater than 10.
Store the teas iterated over in am array named 'shortTeas'.
 */
let teas=["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas=[];

for (const tea of teas) {
    
    if(tea.length>=10){
        continue;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);

