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
		created_on_dtm: {
			allowNull: false,
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		},
		created_by_int: {
			allowNull: true,
			type: DataTypes.BIGINT
		},
		updated_on_dtm: {
			allowNull: true,
			type: DataTypes.DATE
		},
		updated_by_int: {
			allowNull: true,
			type: DataTypes.BIGINT
		},
		deleted_on_dtm: {
			allowNull: true,
			type: DataTypes.DATE
		},
		deleted_by_int: {
			allowNull: true,
			type: DataTypes.BIGINT
		}
	}, 
	{ 
        schema: 'public',
        tableName: 't_role',
		underscored: true
    });

    Role.removeAttribute('id');
    Role.removeAttribute('createdAt');
	Role.removeAttribute('updatedAt');

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