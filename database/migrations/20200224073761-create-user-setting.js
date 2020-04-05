'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_user_setting', {
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			presence_id: {
				type: Sequelize.INTEGER,
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
			schema: 'public',
			uniqueKeys: {
				actions_unique:
				{
					fields: ['user_id']
				}
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_user_setting', { schema: 'public' });
	}
};