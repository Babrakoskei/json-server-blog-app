const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3018;
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

server.use(middlewares);
server.use(router);

server.listen(port);