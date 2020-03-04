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
        tableName: 't_user_group',
		underscored: true
    });

    UserGroup.removeAttribute('id');
    UserGroup.removeAttribute('createdAt');
	UserGroup.removeAttribute('updatedAt');
	

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