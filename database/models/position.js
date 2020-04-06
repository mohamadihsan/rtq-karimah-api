/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-06 21:52:23
 * @modify date 2020-04-06 21:52:23
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
        tableName: 't_position',
		underscored: true
    });

    Position.removeAttribute('id');
    Position.removeAttribute('createdAt');
	Position.removeAttribute('updatedAt');
	

	Position.associate = function(models) {
		Position.hasMany(models.Employees, {
			foreignKey: 'position_id',
			onDelete: 'CASCADE',
		});
	};

	return Position;
};