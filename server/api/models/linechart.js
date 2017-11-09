var mongoose = require('mongoose');

var schema = mongoose.Schema;

var lineChart = new schema({
	data: {
		type: Number,
	},
});

module.exports = mongoose.model('lineChart', lineChart);