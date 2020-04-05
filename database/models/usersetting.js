/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-05 13:36:02
 * @modify date 2020-04-05 13:36:02
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const UserSetting = sequelize.define('UserSetting', {
        user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
        },
        presence_id: {
            type: DataTypes.INTEGER,
            allowNull: true
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
        tableName: 't_user_setting',
		underscored: true
    });

    UserSetting.removeAttribute('id');
    UserSetting.removeAttribute('createdAt');
	UserSetting.removeAttribute('updatedAt');
	
	UserSetting.associate = function(models) {
		// associations can be defined here
		UserSetting.belongsTo(models.User, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE',
			// as: 'userSetting_id',
        });

        UserSetting.belongsTo(models.Presence, {
			foreignKey: 'presence_id',
			onDelete: 'CASCADE',
			// as: 'userSetting_id',
        });
	};

	return UserSetting;
};