/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Schemas Include
var userSchema = require('../models/user');
var simpleTable = require('../models/simpletable');
var dataTable = require('../models/datatables');
var chartJs = require('../models/chartjs');
var controller = require('../controllers/controller')
//Router Module for building up routes
module.exports = function(router){

//Route For Creating User
	router.post('/add_user', controller.add_user);
//Route for Getting simpletable data
	router.get('/get_simpletable', controller.get_simpletable);

//Route for Getting DATATABLE data
	router.get('/get_datatable', controller.get_datatable);

	return router;
}

