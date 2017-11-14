var passport = require('passport');
var googleStrategy = require('passport-google-oauth20');

passport.use(
	new googleStrategy({
		//Options for google strategy
		clientID:'766548237191-eqgql4dh7tuvg1jlbfpjiilh436t83gl.apps.googleusercontent.com',
		clientSecret:'gMHBLxQOfdebEYnjEBB4dJtz'
	}), () => {
		//Passport Call Back Function
		
	}
)