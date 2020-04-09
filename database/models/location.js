/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-06 20:36:21
 * @modify date 2020-04-06 20:36:21
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Location = sequelize.define('Location', {
		location_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        company_id: {
            type: DataTypes.INTEGER,
            allowNull: false 
		},
        location_name_var: {
            type: DataTypes.STRING(150),
            allowNull: false 
		},
		country_name_var: {
            type: DataTypes.STRING(100),
            allowNull: true 
		},
		city_name_var: {
            type: DataTypes.STRING(150),
            allowNull: true 
		},
		address_text: {
			allowNull: true,
			type: DataTypes.TEXT
		},
		longitude: {
			allowNull: true,
			type: DataTypes.DOUBLE
		},
		latitude: {
			allowNull: true,
			type: DataTypes.DOUBLE
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
        tableName: 't_location',
		underscored: true
    });

    Location.removeAttribute('id');
    // Location.removeAttribute('createdAt');
	// Location.removeAttribute('updatedAt');
	

	Location.associate = function(models) {
		Location.belongsTo(models.Company, {
			foreignKey: 'company_id',
			onDelete: 'CASCADE',
		});
	};

	return Location;
};