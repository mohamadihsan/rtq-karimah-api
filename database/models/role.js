/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define('Role', {
		user_group_id: {
			allowNull: false,
			type: DataTypes.BIGINT
		},
		data_json: {
			allowNull: false,
			type: DataTypes.JSONB
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
        tableName: 't_role',
		underscored: true
    });

    Role.removeAttribute('id');
    // Role.removeAttribute('createdAt');
	// Role.removeAttribute('updatedAt');

	Role.associate = function(models) {
		// associations can be defined here
		Role.belongsTo(models.UserGroup, {
			foreignKey: 'user_group_id',
			onDelete: 'CASCADE',
			// as: 'user_group_role',
		});
	};

	return Role;
};