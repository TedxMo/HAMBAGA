var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, './public')));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burgers_control.js');

app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
	console.log(`App listening on http://localhost:${PORT}`);
})