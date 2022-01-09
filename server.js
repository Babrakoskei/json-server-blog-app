const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;

const app = jsonServer();
app.listen(3000,()=>
console.log('starting server: http://localhost:3000')
);
server.use(middlewares);
server.use(router);

server.listen(port);