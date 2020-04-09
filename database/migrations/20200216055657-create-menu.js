'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_menu', {
			menu_id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			menu_name_var: {
				allowNull: false,
				type: Sequelize.STRING(50)
			},
			menu_parent_int: {
				allowNull: true,
				type: Sequelize.INTEGER
			},
			menu_order_int: {
				allowNull: true,
				type: Sequelize.INTEGER
			},
			menu_group_id: {
				allowNull: true,
				type: Sequelize.INTEGER
			},
			url_var: {
				allowNull: false,
				type: Sequelize.STRING
			},
			icon_var: {
				allowNull: true,
				type: Sequelize.STRING(50)
			},
			active_status_boo: {
				allowNull: false,
				type: Sequelize.BOOLEAN,
				defaultValue: false
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
					fields: ['menu_name_var', 'active_status_boo']
				}
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_menu', { schema: 'public' });
	}
};