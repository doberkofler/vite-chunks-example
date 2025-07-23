import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = 3000;

http
	.createServer((req, res) => {
		const fileName = req.url === '/' ? 'index.html' : req.url;
		const extname = path.extname(fileName);
		let filePath = path.join('.', 'dist', fileName);
		let contentType = '';

		switch (extname) {
			case '.js':
				contentType = 'application/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
			case '.html':
				contentType = 'text/html';
				filePath = path.join('.', fileName);
				break;
			default:
				contentType = 'text/plain';
		}

		fs.readFile(filePath, (err, content) => {
			if (err) {
				console.log(`${req.url} -> ${filePath} -> 404 Not Found`);
				res.writeHead(404, {'Content-Type': 'text/plain'});
				res.end('404 Not Found');
			} else {
				console.log(`${req.url} -> ${filePath} -> 200 ok`);
				res.writeHead(200, {'Content-Type': contentType});
				res.end(content);
			}
		});
	})
	.listen(PORT, () => {
		console.log(`Server running at http://localhost:${PORT}`);
	});
