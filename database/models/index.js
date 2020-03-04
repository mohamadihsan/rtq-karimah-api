/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Connection Database ]
 */

'use strict';

const fs 		= require('fs');
const path 		= require('path');
const Sequelize = require('sequelize');
const basename 	= path.basename(__filename);
const env 		= process.env.NODE_ENV || 'development';
const config 	= require(__dirname + '/../config/config.js')[env];
const db 		= {};

let sequelize;
if (config.url) {
	sequelize = new Sequelize(config.url, config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
.readdirSync(__dirname)
.filter(file => {
	return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(file => {
	const model = sequelize['import'](path.join(__dirname, file));
	db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		console.log(db[modelName].associate(db))
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
