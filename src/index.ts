// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET' && req.url === '/') {
//     console.log('server is working');
//     res.end();
//   }
// });

// server.listen(3001, () => {
//   console.log('server on http://localhost:3001');
// });

import app from './server';

app.listen(3001, () => {
  console.log('listening on port http://localhost:3001');
});
