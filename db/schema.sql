CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INTEGER AUTO_INCREMENT ,
	burger_name TEXT,
	devoured BOOLEAN DEFAULT 0,
	date TIMESTAMP,
	PRIMARY KEY(id)
);
