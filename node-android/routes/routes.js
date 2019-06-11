var chgpass = require('config/chgpass');
var register = require('config/register');
var login = require('config/login');


module.exports = function(app) {



	app.get('/', function(req, res) {

		res.end("Node-Android-Project"); 
	});


	app.post('/login',function(req,res){
		var email = req.body.email;
        	var password = req.body.password;

		login.login(email,password,function (found) {
			console.log(found);
			res.json(found);
	});
	});


	app.post('/register',function(req,res){
		var email = req.body.email;
        	var password = req.body.password;
			
		register.register(email,password,function (found) {
			console.log(found);
			res.json(found);
	});		
	});

	
};



