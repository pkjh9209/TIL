// @ts-check

// Formatting, Linting , Type Checking
// Formatting: Prettier
// Linting: ESLint
// Type checking : TypeScript

const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('test');
});



const PORT = 4000;
server.listen(PORT, () =>{
    console.log('the server ist listnening at port: ${PORT}.');
});