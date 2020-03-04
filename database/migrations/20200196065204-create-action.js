'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_action', {
			action_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			action_name_var: {
				type: Sequelize.STRING(50)
			},
			active_status_boo: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false
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
					fields: ['action_name_var', 'active_status_boo']
				}
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_action', { schema: 'public' });
	}
};