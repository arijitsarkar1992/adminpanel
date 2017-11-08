var mongoose = require('mongoose');

var schema = mongoose.Schema;

var chartJs = new schema({
	task: {
		type:String,
	},
	browser: {
		type: String,
	},
	platforms: {
		type: String,
	},
	engine_version: {
		type: Date,
	},
	css_grade: {
		type: String,
	},
});
module.exports = mongoose.model('chartJsSchema', chartJs)