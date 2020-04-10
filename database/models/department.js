/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date -04-10 12:06:46
 * @modify date 2020-04-10 12:06:46
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Department = sequelize.define('Department', {
		department_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		department_code_var: {
			type: DataTypes.STRING(10),
			allowNull: true 
		},
        department_name_var: {
            type: DataTypes.STRING(100),
            allowNull: false 
        },
        description_var: {
            type: DataTypes.STRING(255),
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
        tableName: 't_department',
		underscored: true
    });

    Department.removeAttribute('id');
    // Department.removeAttribute('createdAt');
	// Department.removeAttribute('updatedAt');
	

	Department.associate = function(models) {
		Department.hasMany(models.Position, {
			foreignKey: 'department_id',
			onDelete: 'CASCADE',
		});
	};

	return Department;
};