var mongoose=require('mongoose');
var form_data=mongoose.Schema({
	email:{
		type:String,
		required:true
	},
	password:{
		type:String
	},
	username:{
		type:String
	}
});
module.exports=mongoose.model('form',form_data);