const fs=require('fs');
const path=require('path');

//Function filter the array from response
const filterArray = function (arr, value) {
  return arr.filter(word => word.indexOf(value) == 0)
}

function handler(request, response){

  const {url} = request;
  if(url == "/"){
    response.writeHead(200, {'Content-Type' : 'text/html'});

    fs.readFile(path.join(__dirname, '/../public/index.html'), function(error, file){
      if(error){
        console.log(error);
        return;
      }
       else response.end(file);
    });
  }
  else if(url == "/css/style.css"){
    response.writeHead(200, {'Content-Type' : 'text/css'});

    fs.readFile(path.join(__dirname, '/../public/css/style.css'), function(error, file){
      if(error){
        console.log(error);
        return;
      }
       else response.end(file);
    });
  }

  else if(url == "/js/logic.js"){
    response.writeHead(200, {'Content-Type' : 'application/javascript'});

    fs.readFile(path.join(__dirname, '/../public/js/logic.js'), function(error, file){
      if(error){
        console.log(error);
        return;
      }
       else response.end(file);
    });
  }
  else if(url == "/js/dom.js"){
    response.writeHead(200, {'Content-Type' : 'application/javascript'});

    fs.readFile(path.join(__dirname, '/../public/js/dom.js'), function(error, file){
      if(error){
        console.log(error);
        return;
      }
       else response.end(file);
    });
  }

else if(url === '/search' && request.method === 'POST'){
    let arrayOfwords = [];
    let value = '';
    request.on('data', data => {
      value += data;
    })
    request.on('end', () => {
      const readStream = fs.createReadStream(path.join(__dirname, '/words.txt'), { encoding: 'utf8' });
      readStream.on('data', data => {
        const chunkArr = data.split(/\n/);
        const filterChunck = filterArray(chunkArr, value);
        arrayOfwords = arrayOfwords.concat(filterChunck);
      })
      readStream.on('end', data => {
        response.end(JSON.stringify(arrayOfwords));
      })

    });
  }
}


 module.exports=handler;