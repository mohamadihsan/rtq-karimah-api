/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-06 21:52:23
 * @modify date 2020-04-10 12:24:35
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Position = sequelize.define('Position', {
		position_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position_name_var: {
            type: DataTypes.STRING(100),
            allowNull: false 
        },
		level_order_int: {
			allowNull: true,
			type: DataTypes.INTEGER
		},
        department_id: {
            type: DataTypes.INTEGER,
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
        tableName: 't_position',
		underscored: true
    });

    Position.removeAttribute('id');
    // Position.removeAttribute('createdAt');
	// Position.removeAttribute('updatedAt');
	

	Position.associate = function(models) {
		Position.hasMany(models.Employees, {
			foreignKey: 'position_id',
			onDelete: 'CASCADE',
        });
        
        Position.belongsTo(models.Department, {
			foreignKey: 'department_id',
			onDelete: 'RESTRICT',
		});
	};

	return Position;
};