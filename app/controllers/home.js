var homeController = function (server){

	console.log('corriendo en localhost:3000');

	server.route('/')

		.get(function(req, res){
			res.render('home/index');
		});
};

module.exports = homeController;