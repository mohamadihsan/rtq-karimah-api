/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date -04-10 12:06:46
 * @modify date 2020-04-10 12:06:46
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const EmployeeShift = sequelize.define('EmployeeShift', {
		employee_shift_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
		qr_code_var: {
			type: DataTypes.STRING(255),
			allowNull: true 
		},
		employee_id: {
			type: DataTypes.INTEGER,
			allowNull: false 
		},
		started_time: {
			type: DataTypes.DATE,
			allowNull: true 
		},
		finished_time: {
			type: DataTypes.DATE,
			allowNull: true 
		},
		description_var: {
			type: DataTypes.STRING(255),
			allowNull: true 
		},
		approved_at: {
			type: DataTypes.DATE,
			allowNull: true 
		},
		approved_by: {
			type: DataTypes.BIGINT,
			allowNull: true
		},
		rejected_at: {
			type: DataTypes.DATE,
			allowNull: true 
		},
		rejected_by: {
			type: DataTypes.BIGINT,
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
        schema: 'master',
        tableName: 't_employee_shift',
		underscored: true
    });

    EmployeeShift.removeAttribute('id');
    // EmployeeShift.removeAttribute('createdAt');
	// EmployeeShift.removeAttribute('updatedAt');
	

	EmployeeShift.associate = function(models) {
		EmployeeShift.belongsTo(models.Employees, {
			foreignKey: 'employee_id',
			onDelete: 'RESTRICT',
		});
	};

	return EmployeeShift;
};