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

}

//addlistener for textarea

//addlistener for translate button
