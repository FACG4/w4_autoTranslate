//function for request(fetch)
const connect=function(method,url,cb){
const xhr =new XMLHttpRequest()
xhr.onreadystatechange=function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
  var response = xhr.responseText;
  callback(response);
}

}
xhr.open(method, url);
xhr.send();
}


//function return lastword from inputvalue
const lastWord=function(str){

}

//Function filter the array from response
const filterArray=function(arr,value){
const result = arr.filter(word => word.indexOf(value) == 0)

}

//Function to get the five first elements from filtered array
const getFirstFive =function(arr){

}


module.exports={connect,lastWord,filterArray,getFirstFive}
