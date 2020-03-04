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
			token_text: {
				allowNull: true,
				type: Sequelize.TEXT
			},
			active_status_boo: {
				allowNull: true,
				type: Sequelize.BOOLEAN
			},
			created_on_dtm: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW
			},
			created_by_int: {
				allowNull: true,
				type: Sequelize.BIGINT
			},
			updated_on_dtm: {
				allowNull: true,
				type: Sequelize.DATE
			},
			updated_by_int: {
				allowNull: true,
				type: Sequelize.BIGINT
			},
			deleted_on_dtm: {
				allowNull: true,
				type: Sequelize.DATE
			},
			deleted_by_int: {
				allowNull: true,
				type: Sequelize.BIGINT
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