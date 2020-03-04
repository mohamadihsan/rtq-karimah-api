'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_role', {
			user_group_id: {
				allowNull: false,
				type: Sequelize.BIGINT
			},
			data_json: {
				allowNull: false,
				type: Sequelize.JSONB
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
					fields: ['user_group_id', 'active_status_boo']
				}
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_role', { schema: 'public' });
	}
};