//function for request(fetch)
const connect=function(value,method,url,cb){
const xhr =new XMLHttpRequest()
xhr.onreadystatechange=function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
  var response = JSON.parse(xhr.responseText);
  cb(response);
}

}
xhr.open(method, url);
xhr.send(value);
}


//function return lastword from inputvalue
const lastWord=function(str){
  // console.log(str.split(" ")[str.split(" ").length-1]);
return str.split(" ")[str.split(" ").length-1].toLowerCase()
}

//Function filter the array from response
const filterArray=function(arr,value){
  // console.log(value);

  return arr.filter(word => word.indexOf(value) == 0)


}

//Function to get the five first elements from filtered array
const getFirstFive =function(arr){
return arr.slice(0,10)
}

const inputWithotLastFn=function (text) {
  if (text.split(" ").length>0) {
    console.log("logic",text.split(" ").slice(0,text.split(" ").length-1));
    return text.split(" ").slice(0,text.split(" ").length-1)

  }


}

module.exports={connect,lastWord,filterArray,getFirstFive};
