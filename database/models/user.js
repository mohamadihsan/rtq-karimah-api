/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-24 14:38:32
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        username_var: {
            type: DataTypes.STRING(20),
            allowNull: false,
			unique: true,
			validate: {
				isAlphanumeric: true,
				isLowercase: true,
				notNull: true,
				notEmpty: true,
				max: 20,
				min: 5
			}
        },
        password_var: {
            type: DataTypes.STRING(255),
            allowNull: false 
        },
        email_var: {
            type: DataTypes.STRING(255),
            allowNull: true 
        },
		user_group_id: {
			type: DataTypes.INTEGER,
			allowNull: false
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        token_text: {
            type: DataTypes.TEXT,
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
        tableName: 't_user',
		underscored: true
    });

    User.removeAttribute('id');
    User.removeAttribute('createdAt');
	User.removeAttribute('updatedAt');
	
	User.associate = function(models) {
        // associations can be defined here
        User.hasMany(models.UserSetting, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE',
        });
        
		User.belongsTo(models.UserGroup, {
			foreignKey: 'user_group_id',
			onDelete: 'CASCADE',
        });
        
        User.belongsTo(models.Employees, {
			foreignKey: 'employee_id',
			onDelete: 'CASCADE',
		});
	};

	return User;
};