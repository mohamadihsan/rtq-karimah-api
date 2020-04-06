/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-06 20:36:21
 * @modify date 2020-04-06 20:36:21
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Company = sequelize.define('Company', {
		company_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company_name_var: {
            type: DataTypes.STRING(50),
            allowNull: false 
		},
        email_var: {
            type: DataTypes.STRING(255),
            allowNull: true 
        },
        phone_number_var: {
            type: DataTypes.STRING(30),
            allowNull: true 
        },
        fax_number_var: {
            type: DataTypes.STRING(30),
            allowNull: true 
        },
		address_text: {
			allowNull: true,
			type: DataTypes.TEXT
		},
		logo_var: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		account_number_var: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		account_name_var: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		bank_account_var: {
			type: DataTypes.STRING(100),
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
        tableName: 't_company',
		underscored: true
    });

    Company.removeAttribute('id');
    Company.removeAttribute('createdAt');
	Company.removeAttribute('updatedAt');
	

	Company.associate = function(models) {
		Company.hasMany(models.Employees, {
			foreignKey: 'company_id',
			onDelete: 'CASCADE',
		});

		Company.hasMany(models.Location, {
			foreignKey: 'company_id',
			onDelete: 'CASCADE',
		});
	};

	return Company;
};