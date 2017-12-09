var orm = require('../config/orm.js');

var burger = {
	selectAll: function (table, cb) {
		orm.selectAll(table, function (result) {
			cb(result);
		})
	},

	insert: function (table, col, value, cb) {
		orm.insertOne(table, col, value, function (result) {
			cb(result);
		});
	},

	update: function (table, setColumn, setValue, col, val, cb) {
		orm.updateOne(table, setColumn, setValue, col, val, function (result) {
			cb(result);
		});
	}
}

module.exports = burger;