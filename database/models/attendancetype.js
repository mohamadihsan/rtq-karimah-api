/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-06 21:52:23
 * @modify date 2020-04-06 21:52:23
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const AttendanceType = sequelize.define('AttendanceType', {
		attendance_type_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        attendance_type_code_var: {
            type: DataTypes.STRING(5),
            allowNull: false 
        },
        attendance_type_name_var: {
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
        tableName: 't_attendance_type',
		underscored: true
    });

    AttendanceType.removeAttribute('id');
    // AttendanceType.removeAttribute('createdAt');
	// AttendanceType.removeAttribute('updatedAt');
	

	AttendanceType.associate = function(models) {
		AttendanceType.hasMany(models.AttendanceList, {
			foreignKey: 'attendance_type_id',
			onDelete: 'CASCADE',
		});
	};

	return AttendanceType;
};