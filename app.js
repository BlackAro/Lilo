var app = require('express')(),
    server = require('http').createServer(app),	// On crée le serveur HTPP
    ent = require('ent'),
    fs = require('fs'),
    mysql = require('mysql'),
    connection = mysql.createConnection({		// On crée la connexion à la BDD
    	host	: "localhost",
    	user	: "root",
    	password: "",
    	database: "lilo"
    });

// Testons la connexion à la BDD
console.log('Trying to connect to database of Lilo...');
connection.connect(function(err) {
  if (err) { console.error('Error connecting to database : ' + err.stack); return; }
  console.log('Connexion to database established with thread : ' + connection.threadId + '.');
});

// On fait le routage des pages
app.get('/', function (req, res) {
  console.log(req.ip);
  res.end("Nothing to see here...");
}).get('/recettes/', function (req, res) {
  res.render('recettes/home.ejs');
});

app.post('/recettes/:page', function (req, req) {

});

server.listen(8080);