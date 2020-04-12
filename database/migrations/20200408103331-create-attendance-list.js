'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_attendance_list', {
			attendance_list_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			attendance_type_id: {
				type: Sequelize.STRING(2),
				allowNull: false 
			},
			presence_id: {
				type: Sequelize.INTEGER,
				allowNull: true 
			},
			mechine_id: {
				type: Sequelize.INTEGER,
				allowNull: true 
			},
			employee_id: {
				type: Sequelize.INTEGER,
				allowNull: true 
			},
			company_id: {
				type: Sequelize.INTEGER,
				allowNull: true 
			},
			location_name_var: {
				type: Sequelize.STRING(150),
				allowNull: true 
			},
			longitude: {
				allowNull: true,
				type: Sequelize.DOUBLE
			},
			latitude: {
				allowNull: true,
				type: Sequelize.DOUBLE
			},
			image_var: {
				type: Sequelize.STRING(255),
				allowNull: true 
			},
			started_time: {
				type: Sequelize.DATE,
				allowNull: false 
			},
			finished_time: {
				type: Sequelize.DATE,
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
			schema: 'transaction'
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_attendance_list', { schema: 'transaction' });
	}
};