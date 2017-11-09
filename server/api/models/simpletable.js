var mongoose = require('mongoose');

var schema = mongoose.Schema;

var simpleTable = new schema({
	task: {
		type:String,
	},
	progress: {
		type: String,
	},
	label: {
		type: String,
	},
	user: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	},
	status: {
		type: String,
	},
	reason: {
		type: String,
	}
});
module.exports = mongoose.model('simpleTableSchema', simpleTable);