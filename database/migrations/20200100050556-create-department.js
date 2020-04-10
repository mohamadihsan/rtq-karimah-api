'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_department', {
			department_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			department_code_var: {
				type: Sequelize.STRING(10),
				allowNull: true 
			},
			department_name_var: {
				type: Sequelize.STRING(100),
				allowNull: false 
			},
			description_var: {
				type: Sequelize.STRING(255),
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
			schema: 'public',
			uniqueKeys: {
				actions_unique:
				{
					fields: ['department_name_var', 'department_code_var']
				}
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_department', { schema: 'public' });
	}
};