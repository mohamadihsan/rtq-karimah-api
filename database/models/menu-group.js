/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const MenuGroup = sequelize.define('MenuGroup', {
		menu_group_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        menu_group_name_var: {
            type: DataTypes.STRING(50),
            allowNull: false 
        },
		menu_group_order_int: {
			allowNull: true,
			type: DataTypes.INTEGER
		},
        active_status_boo: {
            type: DataTypes.BOOLEAN,
            allowNull: false 
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
        tableName: 't_menu_group',
		underscored: true
    });

    MenuGroup.removeAttribute('id');
    // MenuGroup.removeAttribute('createdAt');
	// MenuGroup.removeAttribute('updatedAt');
	

	MenuGroup.associate = function(models) {
		MenuGroup.hasMany(models.Menu, {
			foreignKey: 'menu_group_id',
			onDelete: 'CASCADE',
		});
	};

	return MenuGroup;
};