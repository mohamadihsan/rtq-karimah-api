'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_company', {
			company_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			company_name_var: {
				type: Sequelize.STRING(50),
				allowNull: false 
			},
			email_var: {
				type: Sequelize.STRING(255),
				allowNull: true 
			},
			phone_number_var: {
				type: Sequelize.STRING(30),
				allowNull: true 
			},
			fax_number_var: {
				type: Sequelize.STRING(30),
				allowNull: true 
			},
			address_text: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			logo_var: {
				type: Sequelize.STRING(255),
				allowNull: true
			},
			account_number_var: {
				type: Sequelize.STRING(50),
				allowNull: true
			},
			account_name_var: {
				type: Sequelize.STRING(100),
				allowNull: true
			},
			bank_account_var: {
				type: Sequelize.STRING(100),
				allowNull: true
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
		return queryInterface.dropTable('t_company', { schema: 'master' });
	}
};