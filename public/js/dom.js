//function for event lisnter
const eventListener =function(elementId,eventLis ,cb){
return document.getElementById(elementId).addEventListener(eventLis,cb)
}

//function create element
const create = function(tag){
  return document.createElement(tag);
}

//function select element
const select = function(selector){
return document.querySelector(selector)
}

//function append child
const append =function(parent,tag){
 select(parent).appendChild(tag)
}

//function render autocomplete list
const renderAuto=function(arr,prevValue){
  select("#option").innerHTML="";
  arr.map(item=>{
    var option =create('option');
    option.textContent=prevValue+" "+item;
    append('#option',option);

  })


}

//function render translation results
const renderRes =function(transtext,){
  const output="<p class='parText'>"+transtext+"</p>";
   select("#result").innerHTML=(output)
// document.querySelector("#result").innerHTML=(output)
}




//addlistener for textarea
var txtArea=document.getElementsByClassName("textToTranslate")[0];
console.log(txtArea);
txtArea.addEventListener('keypress',(event) => {
  console.log("hi");
var inputValue=txtArea.value;
var last=lastWord(inputValue)
var inputWithotLast=inputWithotLastFn(last)
connect("GET","/search", function(response){
var array = Object.keys(JSON.parse(response));
var filterdArray=getFirstFive(filterArray(array,inputValue));
renderAuto(filterdArray,inputWithotLast.join(""))


console.log("dom",filterdArray,inputWithotLast);
})
});





//addlistener for translate button
// select('#button').addEventListener('submit',(event)=>{
//   var searchvalue=inputValue
//
//
// })
