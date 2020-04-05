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
        tableName: 't_presence',
		underscored: true
    });

    Presence.removeAttribute('id');
    Presence.removeAttribute('createdAt');
	Presence.removeAttribute('updatedAt');
	
	Presence.associate = function(models) {
		// associations can be defined here
		Presence.hasMany(models.UserSetting, {
			foreignKey: 'presence_id',
			onDelete: 'CASCADE'
		});
	};

	return Presence;
};