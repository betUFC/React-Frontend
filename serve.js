// serve.js
const serve = 'serve';
const args = ['-s', 'build', '-l', '80'];

import(serve)
  .then((serveModule) => {
    serveModule.serve(args);
  })
  .catch((error) => {
    console.error('Failed to start server:', error);
  });
