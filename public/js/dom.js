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
  renderAuto(filterdArray)
  })
});





// addlistener for translate button
select('#button').addEventListener('click',(event)=>{
  var searchValue=document.getElementsByClassName("textToTranslate")[0].value.split(" ").join(",")
  var lang=select(".targetLang").value.toLowerCase();
  var url="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180405T132340Z.88c397559ed36b7a.07342fdcd14b4a4b939140d7dd43d3f1a84935a9&text="+searchValue+"&lang="+lang
  connect(null,"GET",url,function (response) {
  var result=response.text[0]
renderRes(result)
})


})
