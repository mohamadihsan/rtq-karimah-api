'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_location', {
			location_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			company_id: {
				type: Sequelize.INTEGER,
				allowNull: false 
			},
			location_name_var: {
				type: Sequelize.STRING(150),
				allowNull: false 
			},
			country_name_var: {
				type: Sequelize.STRING(100),
				allowNull: true 
			},
			city_name_var: {
				type: Sequelize.STRING(150),
				allowNull: true 
			},
			address_text: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			longitude: {
				allowNull: true,
				type: Sequelize.DOUBLE
			},
			latitude: {
				allowNull: true,
				type: Sequelize.DOUBLE
			},
			active_status_boo: {
				type: Sequelize.BOOLEAN,
				allowNull: false 
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: true 
			},
			createdBy: {
				type: Sequelize.BIGINT,
				allowNull: true
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: true
			},
			updatedBy: {
				type: Sequelize.BIGINT,
				allowNull: true
			},
			deletedAt: {
				type: Sequelize.DATE,
				allowNull: true
			},
			deletedBy: {
				type: Sequelize.BIGINT,
				allowNull: true
			}
		}, 
		{
			schema: 'master'
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_location', { schema: 'master' });
	}
};