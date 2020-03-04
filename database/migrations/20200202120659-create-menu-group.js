'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_menu_group', {
			menu_group_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			menu_group_name_var: {
				type: Sequelize.STRING(100)
			},
			menu_group_order_int: {
				allowNull: true,
				type: Sequelize.INTEGER
			},
			active_status_boo: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: true
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
					fields: ['menu_group_name_var', 'active_status_boo']
				}
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_menu_group', { schema: 'public' });
	}
};