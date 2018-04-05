const fs=require('fs');
const path=require('path');
const querystring = require('querystring');

function handler(request, response){

  var endpoint = request.url;
  console.log(endpoint);
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
  console.log(path.join(__dirname, '/words.txt'));
  response.writeHead(302, {'Location' : '/search'});
  fs.readFile(path.join(__dirname, '/words_dictionary.json'), function(error, file){
    response.writeHead(200, {'Content-Type' : 'application/json'});
    if(error){
      console.log(error);
      return;
    }
    response.end(file);
  });

  // var allTheData = '';
  // request.on('data', function(chunk){
  //   allTheData += chunk;
  //   console.log(chunk);
  // });
  //
  // request.on('end', function(){
  //   console.log(allTheData);
  //   var convert = queryString.parse(allTheData);
  //   // console.log(convert);
  //   console.log(convert.blogpost);
  //   response.end();
  //
  // })
}
}

 module.exports=handler;

























// console.log("hi2");
// //Handle calls to the home page
// const handleHome = (request, response) => {
// console.log(request.url);
//   console.log("hi");
// const filepath=path.join(__dirname,"..","public","index.html")
// fs.readFile(filepath,function (err,file) {
//   if (err) {
//     console.log(err);
//     response.writeHead(500, { 'Content-Type': 'text/html' });
//     response.end();
//
//   }
//   else {
//           response.writeHead(200, { 'Content-Type': 'text/html' });
//           response.end(file);
//       }
//
// })
//
// }
//
//
//   // Handler Function for Static Files
//
//   const handleStatic = (request, response) => {
//
//
//   }
//   module.exports=handleHome
//
//
// // Handler Function for Autocomplete Results List
// const handleResultsList = (request, response,inputvalue) => {
//
// res.writeHead(200, {
//   "Content-Type": "text/plain"
// });
// console.log(query);
//   fs.readFile(path.join(__dirname,'/words.txt'), function(error, file){
//     if(error){
//       console.log(error);
//       return;
//     }
//      else response.end(file);
//   });
//
// }
//
//
// //Handler Function for Translation Results
// const handleTranslateResults = (request, response) => {
//
// }
//
//
//
//
//
// // function handler(request, response){
// //   var endpoint = request.url;
// //   if(endpoint == "/"){
// //     response.writeHead(200, {'Content-Type' : 'text/html'});
// //
// //     fs.readFile(path.join(__dirname, '/../public/index.html'), function(error, file){
// //       if(error){
// //         console.log(error);
// //         return;
// //       }
// //        else response.end(file);
// //     });
// //   }
// //   else if(endpoint == "/main.css"){
// //     response.writeHead(200, {'Content-Type' : 'text/css'});
// //
// //     fs.readFile(path.join(__dirname, '/../public/main.css'), function(error, file){
// //       if(error){
// //         console.log(error);
// //         return;
// //       }
// //        else response.end(file);
// //     });
// //   }
// //
// //   else if(endpoint == "/img/download.jpeg"){
// //     response.writeHead(200, {'Content-Type' : 'text/jpg'});
// //
// //     fs.readFile(path.join(__dirname, '/../public/img/download.jpeg'), function(error, file){
// //       if(error){
// //         console.log(error);
// //         return;
// //       }
// //        else response.end(file);
// //     });
// // }
// // else if(endpoint == '/create-post'){
// //   response.writeHead(302, {'Location' : '/'});
// //   var allTheData = '';
// //   request.on('data', function(chunk){
// //     allTheData += chunk;
// //   });
// //
// //   request.on('end', function(){
// //     console.log(allTheData);
// //     var convert = queryString.parse(allTheData);
// //     // console.log(convert);
// //     console.log(convert.blogpost);
// //     response.end();
// //
// //   })
// // }
// // }
