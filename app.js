var express = require('express');
var app = express();

app.set("view engine", "jade");
app.use(express.static("public"));
app.get("/", function(request, response) {
	response.render("index");
});
app.get('*', function(request, response){
  response.render("pagenotfound");
});

//app.listen(8080);
//For Heroku deploy
app.listen(process.env.PORT || 8080);
