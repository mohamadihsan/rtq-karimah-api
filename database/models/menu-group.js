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
        created_on_dtm: {
            type: DataTypes.DATE,
            allowNull: false 
        },
        created_by_int: {
            type: DataTypes.BIGINT
        },
        updated_on_dtm: {
            type: DataTypes.DATE
        },
        updated_by_int: {
            type: DataTypes.BIGINT
        },
        deleted_on_dtm: {
            type: DataTypes.DATE
        },
        deleted_by_int: {
            type: DataTypes.BIGINT
        }
    }, 
    { 
        schema: 'public',
        tableName: 't_menu_group',
		underscored: true
    });

    MenuGroup.removeAttribute('id');
    MenuGroup.removeAttribute('createdAt');
	MenuGroup.removeAttribute('updatedAt');
	

	MenuGroup.associate = function(models) {
		// associations can be defined here
		MenuGroup.hasMany(models.Menu, {
			foreignKey: 'menu_group_id',
			onDelete: 'CASCADE',
			// as: 'menu_group_list',
		});
	};

	return MenuGroup;
};