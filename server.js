var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var fs = require('fs');

//Connection to database
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'blog'
});

connection.connect(function (err) {
    if (err) {
        return console.error('could not connect to mysql', err);
    }
    console.log('connection ok');


    var app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    //Redirection vers le repertoire "public" depuis localhost
    app.use(express.static(__dirname + "/public"));

    var server = app.listen(8090, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });

    app.get('/', function (req, res) {
        res.sendFile('/public/index.html', {root: __dirname});
    });

    app.get('/getArticles', bodyParser.json(), function (req, res) {
        var query = 'SELECT * FROM articles';
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });

    app.get('/getCategories', bodyParser.json(), function (req, res) {
        var query = 'SELECT * FROM catagories';
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });

    app.post('/ajoutArt', bodyParser.json(), function (req, res) {
        var query = "INSERT INTO articles (title, body, idCategory, date) VALUES(\"" + req.body.titArt + "\", \"" + req.body.contArt + "\", \"" + req.body.catArt + "\", \"" + req.body.date + "\")";
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });

    app.post('/getArticle', bodyParser.json(), function (req, res) {
        var query = "SELECT * FROM articles WHERE idArticle =\"" + req.body.id + "\"" ;
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });

    app.post('/path', bodyParser.json(), function (req, res) {
        var query = 'query';
        connection.query(query, function (err, result) {
            if (err) {
                console.error('error running query', err);
            }
            res.statusCode = 200;
            res.send(result);
        });
    });
});