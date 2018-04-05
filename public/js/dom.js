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
const renderAuto=function(arr){
  select("#option").innerHTML="";
  arr.map(item=>{
    var option =create('option');
    option.textContent=item;
    append('#option',option);
  })
}

//function render translation results
const renderRes =function(transtext,){
  const output="<p class='parText'>"+transtext+"</p>";
   select("#result").innerHTML=(output)
}

//addlistener for textarea
var txtArea=document.getElementsByClassName("textToTranslate")[0];
txtArea.addEventListener('keyup',(event) => {
  var inputValue=txtArea.value;
  connect(inputValue,"POST","/search", function(response){
  var array = Object.values(response);
  var filterdArray = getFirstFive(array);
  console.log(filterdArray);
  renderAuto(filterdArray)
  })
});





// addlistener for translate button
// select('#button').addEventListener('submit',(event)=>{
//   var searchvalue=inputValue


// })
