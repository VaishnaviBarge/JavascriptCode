/* Example 1 */

document.getElementById("changeTextButton")
.addEventListener('click', function () {
    const paragraph=document.getElementById("myParagrph");
    paragraph.textContent="Difficult roads ofent lead to beautiful destination"
});

/* Example 2 */ 

document.getElementById("highlightFirstCity")
.addEventListener('click',function () {
    let cityList=document.getElementById("citiesList");
    cityList.firstElementChild.classList.add("highlight")
})

/* Example 3 */

document.getElementById("changeOrder")
.addEventListener('click',function () {
        let coffeeType=document.getElementById("coffeeType")
        
        coffeeType.textContent="Espresso"
        coffeeType.style.padding="5px";

    })


/* Example 4 */

document.getElementById("addNewItem")
.addEventListener('click',function () {
    let newItem=document.createElement('li')
    newItem.textContent="Eggs"
    document.getElementById("ShoppingList").appendChild(newItem);
})


/* Example 5 */

document.getElementById("removingLastTask")
.addEventListener('click',function () {
    let  tasklist=document.getElementById("taskList");
    tasklist.lastElementChild.remove();
})

/* Example 6 */
 
document.getElementById("clickMeButton")
.addEventListener("dblclick" , function(){
    alert("clicked");
})

/* Example 7 */

document.getElementById("teaList")
.addEventListener("click", function(event){
    console.log(event.target);
    if(event.target && event.target.matches('.teaItem')){
        alert("You selectes ",event.target.textContent)
    }
}); 

/* Example 8 */

document.getElementById("feedBackForm")
.addEventListener("submit",function(event){
    alert("submitted !");
    event.preventDefault();
    let feedback =  document.getElementById("feedBackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay")
    .textContent = `feedback is : ${feedback}`
})

/* Example 9 */

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domStatus").textContent="Dom Fully loaded"
})

/* Example 10 */

document.getElementById("toggleHighlight")
.addEventListener("click", function(){
    let dt=document.getElementById("descriptionText");
    dt.classList.toggle("highlight");
}) 