'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_user', {
			user_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			username_var: {
				allowNull: false,
				type: Sequelize.STRING(20),
				unique: true
			},
			password_var: {
				allowNull: false,
				type: Sequelize.STRING(255)
			},
			email_var: {
				allowNull: true,
				type: Sequelize.STRING(255)
			},
			user_group_id: {
				allowNull: false,
				type: Sequelize.INTEGER
			},
			device_id_var: {
				type: Sequelize.STRING(255),
				allowNull: true
			},
			token_text: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			active_status_boo: {
				allowNull: true,
				type: Sequelize.BOOLEAN
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
					fields: ['username_var', 'active_status_boo']
				}
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_user', { schema: 'public' });
	}
};