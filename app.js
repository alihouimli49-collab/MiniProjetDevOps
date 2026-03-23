const http = require('http');
const server = http.createServer((req, res) => {
 res.writeHead(200, {"Content-Type": "application/json"});
 res.end(JSON.stringify({ message: "Application DevOps opérationnelle" }));
});
server.listen(3000, () => {
 console.log("Serveur lancé sur le port 3000");
});
