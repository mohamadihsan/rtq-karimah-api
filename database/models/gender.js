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
        tableName: 't_gender',
		underscored: true
    });

    Gender.removeAttribute('id');
    Gender.removeAttribute('createdAt');
	Gender.removeAttribute('updatedAt');
	

	Gender.associate = function(models) {
		Gender.hasMany(models.Employees, {
			foreignKey: 'gender_id',
			onDelete: 'CASCADE',
		});
	};

	return Gender;
};