/*
|---------------------------------------------|
|CONTROLLER Functions For All the routes which|
|which help ypu to understand the backend	  |
|functionality behind each route.			  |
|Enjoy Routing!!							  |
|---------------------------------------------|
*/


var mongoose = require('mongoose');

//Schemas Include
var userSchema = require('../models/user');
var simpleTable = require('../models/simpletable');
var dataTable = require('../models/datatables');
var chartJs = require('../models/chartjs');
var controller = require('../controllers/controller')

//Controller for adding admin user
exports.add_user = function(req, res){
	var newEmail = req.body.email;
	console.log(req.body + '!!!!!All Details!!!!!');

	//Verifying if EMAIL is duplicate or not
	userSchema.find({email: newEmail}, function(err, result){
		if(err){
			console.log(err);
		}
		else if(result == ""){
			var users = new userSchema();
			users.name = req.body.name;
			users.email = req.body.email;
			users.password = req.body.password;
			users.phone = req.body.phone;
			users.role = req.body.role;
			users.save(function(err, data){
				if(err){
					console.log(err);
				}
				else{
					console.log("User Saved!!!");
					res.json(data);
				}
			});
		}
		else{
			console.log('Email already Exist!!');
			res.json(0);
		}
	});	
}

//Controller for Getting Simple Tables data
exports.get_simpletable = function(req, res){
	simpleTable.find(function(err, data){
		if(err){
			console.log(err);
		}
		else{
			console.log("Simple TABLE recieved!!");
			return res.json(data);
		}
	});
}

//Controller for Getting Data Tables data
exports.get_datatable = function(req, res){
	dataTable.find(function(err, data){
		if(err){
			console.log(err);
		}
		else{
			console.log("DATATABLE recieved!1");
			return res.json(data);
		}
	})
}

