var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var router = express.Router();
var appRoutes = require('./api/routes/api')(router);
const objectId = require('mongoose').ObjectId;
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/adminlte', function(err, res){
	if(err){
		console.log('Not Connected!!', err);
		//res.status(400).send("Not Connected");
	}
	else{
		console.log("Connected to db!!");
		//res.status(200).send("Connected");
	}
});

//Morgan for middleware logging
app.use(morgan('dev'));

//For parsing application json
app.use(bodyParser.json());

//For parsing application x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//Json Web Token JWT
//app.use(expressJwt({secret: 'jalaj'}).unless({path: ['/api/login']}))

//Cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Mongoose connection to MongoDb
app.use('/api', appRoutes);

//
// app.get('*', function(req, res){
// 	res.sendFile(path.resolve('/api'));
// })
app.get('/', function(req, res){
	res.send('Hello');
});

//Listening To port 3000
app.listen(process.env.PORT || 3000,function(){
	console.log("Running on Port:3000")
});
