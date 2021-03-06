/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-05 13:36:02
 * @modify date 2020-04-05 13:36:02
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Presence = sequelize.define('Presence', {
        presence_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
		},
        description_var: {
            type: DataTypes.STRING(255),
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
        tableName: 't_presence',
		underscored: true
    });

    Presence.removeAttribute('id');
    // Presence.removeAttribute('createdAt');
	// Presence.removeAttribute('updatedAt');
	
	Presence.associate = function(models) {
		Presence.hasMany(models.UserSetting, {
			foreignKey: 'presence_id',
			onDelete: 'CASCADE'
		});
	};

	return Presence;
};