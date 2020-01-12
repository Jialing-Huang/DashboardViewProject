const http = require('http');
const app = require('./src/app/back-end/app');
const port = process.env.PORT || 3000;

app.set('port',port);
const server = http.createServer(app);

server.listen(port);