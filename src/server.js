const http=require('http');
const handler=require('./handler');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const server =http.createServer(handler);

server.listen(port,()=>{
  console.log('server running on :http://'+host+':'+port);
});
