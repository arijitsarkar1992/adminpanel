var mongoose = require('mongoose');

var schema = mongoose.Schema;

var user = new schema({
	name: {
		type:String,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	phone: {
		type: String,
	},
	role: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now
	},
});
module.exports = mongoose.model('usreSchema', user)