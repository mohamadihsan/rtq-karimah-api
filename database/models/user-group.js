/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const UserGroup = sequelize.define('UserGroup', {
		user_group_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_group_name_var: {
            type: DataTypes.STRING(50),
            allowNull: false 
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
        tableName: 't_user_group',
		underscored: true
    });

    UserGroup.removeAttribute('id');
    // UserGroup.removeAttribute('createdAt');
	// UserGroup.removeAttribute('updatedAt');
	

	UserGroup.associate = function(models) {
		// associations can be defined here
		UserGroup.hasMany(models.Role, {
			foreignKey: 'user_group_id',
			onDelete: 'CASCADE'
			// as: 'user_group_role',
        });
        
        UserGroup.hasMany(models.User, {
			foreignKey: 'user_group_id',
			onDelete: 'CASCADE',
			// as: 'user_group_role',
		});
	};

	return UserGroup;
};