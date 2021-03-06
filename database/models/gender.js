/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-06 21:52:23
 * @modify date 2020-04-06 21:52:23
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Gender = sequelize.define('Gender', {
		gender_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gender_name_var: {
            type: DataTypes.STRING(100),
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
        tableName: 't_gender',
		underscored: true
    });

    Gender.removeAttribute('id');
    // Gender.removeAttribute('createdAt');
	// Gender.removeAttribute('updatedAt');
	

	Gender.associate = function(models) {
		Gender.hasMany(models.Employees, {
			foreignKey: 'gender_id',
			onDelete: 'CASCADE',
		});
	};

	return Gender;
};