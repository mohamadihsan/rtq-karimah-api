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
        schema: 'master',
        tableName: 't_employees',
		underscored: true
    });

    Employees.removeAttribute('id'); 
    Employees.removeAttribute('createdAt');
	Employees.removeAttribute('updatedAt');
	
	Employees.associate = function(models) {
		// associations can be defined here
		// Menu.belongsTo(models.User, {
		// 	foreignKey: 'user_id',
		// 	onDelete: 'RESTRICT',
		// 	// as: 'menu_group_list',
		// });
	};

	return Employees;
};