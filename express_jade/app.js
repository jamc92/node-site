var express = require('express');
var fs = require('fs');
var	app = express();

   app.use(express.static(__dirname + '/public'));

	 app.get('/', function(request, response){

     response.render('index.jade',
        {
          title: "Fruit Store",
          fruit: "Watermelon",
          image: "camiseta1.png"
        }
   );

	});

	app.listen(3000, function(){

		console.log("Listening port 3000");
	});
