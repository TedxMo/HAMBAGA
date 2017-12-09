var connection = require('./connection.js');


var orm = {
	selectAll: function (table, callback) {
		var query = 'SELECT * FROM ??';
		connection.query(query, [table], (err,result) => {
			if (err) throw err;
			callback(result);
		});
	},

	insertOne: function (table, col,value, callback) {
		var query = 'INSERT INTO ?? SET ?? = ?';
		var params = [table, col, value];
		connection.query(query, params, (err,result) => {
			if (err) throw err;
			callback(result);
		});

	},
	
	updateOne: function (table, setColumn, setValue, col, val, callback) {
		var query = 'UPDATE ?? SET ?? = ? WHERE ??=?';
		var params = [table, setColumn, setValue, col, val];
		connection.query(query, params, (err, result) =>{
			if (err) throw err;
			callback(result);
		});
	}
}

module.exports = orm;