const express = require('express');
const http = require('http');
var enforce = require('express-sslify');
const path = require('path');
let app = express();
app.use(enforce.HTTPS(), express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
