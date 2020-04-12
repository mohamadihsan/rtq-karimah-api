'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_employee_shift', {
			employee_shift_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			qr_code_var: {
				type: Sequelize.STRING(255),
				allowNull: true 
			},
			employee_id: {
				type: Sequelize.INTEGER,
				allowNull: false 
			},
			started_time: {
				type: Sequelize.DATE,
				allowNull: true 
			},
			finished_time: {
				type: Sequelize.DATE,
				allowNull: true 
			},
			description_var: {
				type: Sequelize.STRING(255),
				allowNull: true 
			},
			approved_at: {
				type: Sequelize.DATE,
				allowNull: true 
			},
			approved_by: {
				type: Sequelize.BIGINT,
				allowNull: true
			},
			rejected_at: {
				type: Sequelize.DATE,
				allowNull: true 
			},
			rejected_by: {
				type: Sequelize.BIGINT,
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
		return queryInterface.dropTable('t_employee_shift', { schema: 'master' });
	}
};