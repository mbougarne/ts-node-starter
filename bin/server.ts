/**
 *
 * The code in this file is based on https://github.com/expressjs/generator "bin/www"
 *
*/

import { createServer } from 'http';
import Debug from 'debug';
import app from '../src';

const debug = Debug('ts:server');
const { log, error } = console;

const server = createServer(app);
const PORT = process.env.PORT || 3000;
const HOST = (process.env.HOST || '127.0.0.1') as unknown as number;

app.set('port', PORT);
app.set('host', HOST);

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (err: { syscall: string; code: any; }) => {
	if (err.syscall !== 'listen') {
		throw err;
	}

	const bind = (typeof PORT === 'string') ? `Pipe ${PORT}` : `Port ${PORT}`;

	// handle specific listen errors with friendly messages
	switch (err.code) {
	case 'EACCES':
		error(`${bind} requires elevated privileges`);
		process.exit(0);
	case 'EADDRINUSE':
		error(`${bind} is already in use`);
		process.exit(0);
	default:
		throw err;
	}
};

/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = () => {
	const addr = server.address();
	const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr?.port}`;
	debug(`Listening on ${bind}`);
};

server.on('connection', () => log(`Connected and running on ${HOST}:${PORT}`));
server.on('listening', onListening);
server.on('error', onError);
server.listen(PORT, HOST);
