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
        tableName: 't_user_setting',
		underscored: true
    });

    UserSetting.removeAttribute('id');
    // UserSetting.removeAttribute('createdAt');
	// UserSetting.removeAttribute('updatedAt');
	
	UserSetting.associate = function(models) {
		UserSetting.belongsTo(models.User, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE',
        });

        UserSetting.belongsTo(models.Presence, {
			foreignKey: 'presence_id',
			onDelete: 'CASCADE',
        });
	};

	return UserSetting;
};