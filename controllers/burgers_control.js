var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

//get route on root displays all burgers 
router.get('/', function(req,res)  {
	burger.selectAll('burgers', function(result){
		res.render('index', {burgers: result})
	});
});

//post api route inserts burger in to database
router.post('/api/burger', function(req,res) {
	var name = req.body.burger_name;
	burger.insert('burgers', 'burger_name', name, function(result){
		console.log(`One row inserted at id ${result.insertId}`);
		res.status(200).end();
	});
	
});

//put api route modifies devoured boolean of selected burger
router.put('/api/:burger', function(req,res)  {
	var id = req.params.burger
	burger.update('burgers', 'devoured', 1, 'id', id, function(result) {
		console.log('Result from put request: ',result.message);
		console.log("Rows updated: "+result.affectedRows)
		res.status(200).end();
	});
});

module.exports = router;