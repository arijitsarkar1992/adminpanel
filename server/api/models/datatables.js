var mongoose = require('mongoose');

var schema = mongoose.Schema;

var dataTable = new schema({
	rendering_engine: {
		type:String,
	},
	browser: {
		type: String,
	},
	platforms: {
		type: String,
	},
	engine_version: {
		type: String,
	},
	css_grade: {
		type: String,
	},
	reason: {
		type: String,
	}

});
module.exports = mongoose.model('dataTableSchema', dataTable)