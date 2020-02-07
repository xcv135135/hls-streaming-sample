const HLSServer = require('hls-server')
const http = require('http')

const hostname = '10.64.105.206';
const port = 8000;

const server = http.createServer()
const hls = new HLSServer(server, {
	path: '/streams',     // Base URI to output HLS streams
	dir: 'video'  // Directory that input files are stored
})
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
	console.log(`Streaming playing at http://${hostname}:${port}/streams/output.m3u8`);
});
