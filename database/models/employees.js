/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-05 11:19:42
 * @modify date 2020-04-05 11:19:42
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Employees = sequelize.define('Employees', {
        employee_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
		},
		identity_number_var: {
            type: DataTypes.STRING(25),
            allowNull: false,
			validate: {
				isAlphanumeric: true,
				isLowercase: true,
				notNull: true,
				notEmpty: true,
				max: 25,
				min: 1
			} 
        },
        fullname_var: {
            type: DataTypes.STRING(100),
            allowNull: false,
			validate: {
				isAlphanumeric: true,
				isLowercase: true,
				notNull: true,
				notEmpty: true,
				max: 100,
				min: 2
			} 
        },
        nickname_var: {
            type: DataTypes.STRING(15),
            allowNull: false,
			validate: {
				isAlphanumeric: true,
				isLowercase: true,
				notNull: true,
				notEmpty: true,
				max: 15,
				min: 1
			} 
		},
		gender_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		},  
        phone_number_var: {
            type: DataTypes.STRING(30),
            allowNull: true 
        },
        place_of_birth_var: {
            type: DataTypes.STRING(50),
            allowNull: true 
        },
        date_of_birth_on_dtm: {
            type: DataTypes.DATE,
            allowNull: true 
        },
		address_var: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		religion_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		}, 
		marital_status_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
        },
		company_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		},
		position_id: {
            type: DataTypes.INTEGER,
            allowNull: true 
		},
		employment_status_id: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
        join_date_on_dtm: {
            type: DataTypes.DATE,
            allowNull: true 
		},
        shift_status_boo: {
            type: DataTypes.BOOLEAN,
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
        schema: 'master',
        tableName: 't_employees',
		underscored: true
    });

    Employees.removeAttribute('id'); 
    // Employees.removeAttribute('createdAt');
	// Employees.removeAttribute('updatedAt');
	
	Employees.associate = function(models) {
		Employees.hasMany(models.User, {
			foreignKey: 'employee_id',
			onDelete: 'RESTRICT',
        });

        Employees.belongsTo(models.Company, {
			foreignKey: 'company_id',
			onDelete: 'RESTRICT',
		});
	};

	return Employees;
};