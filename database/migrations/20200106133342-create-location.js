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
			created_on_dtm: {
				type: Sequelize.DATE,
				allowNull: false 
			},
			created_by_int: {
				type: Sequelize.BIGINT
			},
			updated_on_dtm: {
				type: Sequelize.DATE
			},
			updated_by_int: {
				type: Sequelize.BIGINT
			},
			deleted_on_dtm: {
				type: Sequelize.DATE
			},
			deleted_by_int: {
				type: Sequelize.BIGINT
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