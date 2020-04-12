/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-08 17:34:43
 * @modify date 2020-04-08 17:34:43
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const AttendanceList = sequelize.define('AttendanceList', {
        attendance_list_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
		},
		attendance_type_id: {
            type: DataTypes.STRING(2),
            allowNull: false 
		},
		presence_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		},
		mechine_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		},
		employee_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		},
		company_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		},
		location_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		},
        location_name_var: {
            type: DataTypes.STRING(150),
            allowNull: true 
		},
		longitude: {
			allowNull: true,
			type: DataTypes.DOUBLE
		},
		latitude: {
			allowNull: true,
			type: DataTypes.DOUBLE
		},
        image_var: {
            type: DataTypes.STRING(255),
            allowNull: true 
        },
        started_time: {
            type: DataTypes.DATE,
            allowNull: false 
        },
        finished_time: {
            type: DataTypes.DATE,
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
        schema: 'transaction',
        tableName: 't_attendance_list',
		underscored: true
    });

    AttendanceList.removeAttribute('id');
    // AttendanceList.removeAttribute('createdAt');
	// AttendanceList.removeAttribute('updatedAt');
	
	AttendanceList.associate = function(models) {
		AttendanceList.belongsTo(models.Employees, {
			foreignKey: 'employee_id',
			onDelete: 'RESTRICT',
		});

		AttendanceList.belongsTo(models.Presence, {
			foreignKey: 'presence_id',
			onDelete: 'RESTRICT',
		});

		AttendanceList.belongsTo(models.AttendanceType, {
			foreignKey: 'attendance_type_id',
			onDelete: 'RESTRICT',
		});

		AttendanceList.belongsTo(models.Company, {
			foreignKey: 'company_id',
			onDelete: 'RESTRICT',
        });
        
		AttendanceList.belongsTo(models.Location, {
			foreignKey: 'location_id',
			onDelete: 'RESTRICT',
		});
	};

	return AttendanceList;
};