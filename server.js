var connect = require('connect');
 
var app = connect()
	.use(connect.static(__dirname + "/public"))
    .listen(process.env.PORT || 3000);