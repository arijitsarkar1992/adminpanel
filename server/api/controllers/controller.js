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
var lineChart = require('../models/linechart');
var formData =require ('../models/forms');
var controller = require('../controllers/controller')


//Controller for adding admin user
exports.add_user = function(req, res){
	var newEmail = req.body.email;
	console.log(req.body);

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

//Controller for inserting Simple Table data
exports.add_simpletable = function(req, res){
	var simple = new simpleTable();
	 console.log(req.body);

	 simple.task = req.body.task;
	 simple.progress = req.body.progress;
	 simple.label = req.body.label;
	 simple.user = req.body.user;
	 simple.status = req.body.status;
	 simple.reason = req.body.reason;
	 simple.save(function(err, data){
	 	if(err){
	 		console.log(err);
	 	}
	 	else{
	 		console.log("Simple Data Saved");
	 		return res.json(data);
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

//Controller for inserting DataTable data
exports.add_datatable = function(req, res){
	var data = new dataTable();
	 console.log(req.body);

	 data.rendering_engine = req.body.rendering_engine;
	 data.browser = req.body.browser;
	 data.platforms = req.body.platforms;
	 data.engine_version = req.body.engine_version;
	 data.css_grade = req.body.css_grade;
	 data.reason = req.body.reason;
	 data.save(function(err, data){
	 	if(err){
	 		console.log(err);
	 	}
	 	else{
	 		console.log("Data Data Saved");
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
//function to save form data
exports.save_form_data=function(req,res){
	var newData=new formData();
	newData.email=req.body.email;
	newData.password=req.body.password;
	newData.username=req.body.username;
	newData.save(function(err,result){
		if(err){
			console.log(err);
		}
		else{
			console.log(result);
		}
	})

}

//Controller for Addin LineChart data
// exports.add_linechart = function(req, res){
	
// }
