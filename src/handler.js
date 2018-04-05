const fs=require('fs');
const path=require('path');
const querystring = require('querystring');
const logic = require(path.join(__dirname,'/../public/js/logic.js'));

function handler(request, response){

  var endpoint = request.url;
  if(endpoint == "/"){
    response.writeHead(200, {'Content-Type' : 'text/html'});

    fs.readFile(path.join(__dirname, '/../public/index.html'), function(error, file){
      if(error){
        console.log(error);
        return;
      }
       else response.end(file);
    });
  }
  else if(endpoint == "/css/style.css"){
    response.writeHead(200, {'Content-Type' : 'text/css'});

    fs.readFile(path.join(__dirname, '/../public/css/style.css'), function(error, file){
      if(error){
        console.log(error);
        return;
      }
       else response.end(file);
    });
  }

  else if(endpoint == "/js/logic.js"){
    response.writeHead(200, {'Content-Type' : 'application/javascript'});

    fs.readFile(path.join(__dirname, '/../public/js/logic.js'), function(error, file){
      if(error){
        console.log(error);
        return;
      }
       else response.end(file);
    });
  }
  else if(endpoint == "/js/dom.js"){
    response.writeHead(200, {'Content-Type' : 'application/javascript'});

    fs.readFile(path.join(__dirname, '/../public/js/dom.js'), function(error, file){
      if(error){
        console.log(error);
        return;
      }
       else response.end(file);
    });
  }

else if(endpoint == '/search'){
    let arrayOfwords = [];
    let value = '';
    request.on('data', data => {
      value += data;
    })
    request.on('end', data => console.log(value))
    const readStream = fs.createReadStream(path.join(__dirname, '/words.txt'), { encoding: 'utf8' });
    readStream.on('data', data => {
      const chunkArr = data.split(/\n/);
      const filterChunck = logic.filterArray(chunkArr, value);
      arrayOfwords = arrayOfwords.concat(filterChunck);
    })
    readStream.on('end', data => {
      response.end(JSON.stringify(arrayOfwords));

    })
  }
}


 module.exports=handler;