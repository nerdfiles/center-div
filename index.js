const exec = require('child_process').exec;
require('dotenv').config();
console.log('running on', 'http://localhost:' + process.env.PORT);
exec(`python -m http.server ${process.env.PORT}`);
