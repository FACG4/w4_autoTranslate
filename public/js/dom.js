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
document.querySelector(selector)
}

//function append child
const append =function(parent,tag){
 select(parent).appendChild(select(tag))
}

//function render autocomplete list
const renderAuto=function(arr){
  const ul=create('ul');
  arr.map(item=>{
    const li = create('li');
    li.textContent=item ;
    ul.appendChild(li);

  })
  const autoList1=select('#autoList');
  autoList1.appendChild(ul);

}

//function render translation results
const renderRes =function(){
  const renderResult=function(arr)
  
const renderRes =function(transtext){
  const output="<p class='parText'>"+transtext+"</p>";
  // use select("#result").innerHTML=(output)
// document.querySelector("#result").innerHTML=(output)
}




//addlistener for textarea
var txtArea=document.getElementsByClassName("textToTranslate")[0];
console.log(txtArea);
txtArea.addEventListener('change',(event) => {
  console.log("hi");
var inputValue=txtArea.value;
connect("GET","/search", function(response){
var array = Object.keys(JSON.parse(response));
array.forEach(function(element){
  if(element.startsWith(inputValue)){console.log(element);}
})
console.log(array.slice(0,10));
})
});





//addlistener for translate button
