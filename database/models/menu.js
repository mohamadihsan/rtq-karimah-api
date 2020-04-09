/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Menu = sequelize.define('Menu', {
		menu_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		menu_name_var: {
			allowNull: false,
			type: DataTypes.STRING(50)
		},
		menu_parent_int: {
			allowNull: true,
			type: DataTypes.INTEGER
		},
		menu_order_int: {
			allowNull: true,
			type: DataTypes.INTEGER
		},
		menu_group_id: {
			allowNull: true,
			type: DataTypes.INTEGER
		},
		url_var: {
			allowNull: false,
			type: DataTypes.STRING
		},
		icon_var: {
			allowNull: true,
			type: DataTypes.STRING(50)
		},
		active_status_boo: {
			allowNull: false,
			type: DataTypes.BOOLEAN,
			defaultValue: false
		},
        createdAt: {
            type: DataTypes.DATE,
            allowNull: true 
        },
        createdBy: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedBy: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deletedBy: {
            type: DataTypes.BIGINT,
            allowNull: true
        }
	}, 
	{ 
        schema: 'public',
        tableName: 't_menu',
		underscored: true
    });

    Menu.removeAttribute('id');
    // Menu.removeAttribute('createdAt');
	// Menu.removeAttribute('updatedAt');
	
	Menu.associate = function(models) {
		Menu.belongsTo(models.MenuGroup, {
			foreignKey: 'menu_group_id',
			onDelete: 'CASCADE',
		});
	};

	return Menu;
};