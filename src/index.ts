import { createServer } from "http";

const server = createServer();

server.on('connection', () => {
  console.log('Connected')
});

server.on('error', console.error);

server.listen(3000, '127.0.0.1', () => console.log('Connected on port 3000'));