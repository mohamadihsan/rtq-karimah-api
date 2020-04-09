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
		return queryInterface.dropTable('t_company', { schema: 'master' });
	}
};