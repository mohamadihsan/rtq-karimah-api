/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {
	const Action = sequelize.define('Action', {
        action_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        action_name_var: {
            type: DataTypes.STRING(50),
            allowNull: false,
			validate: {
				isAlphanumeric: true,
				isLowercase: true,
				notNull: true,
				notEmpty: true,
				max: 20,
				min: 5
			} 
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
        tableName: 't_action',
		underscored: true
    });

    // sequelize
    //     .sync({
    //         force: false,
    //         logging: console.log
    //     })
    //     .then(function() {
    //         return Action.create({
    //             action_name_var: 'man',
    //             active_status_boo: true,
    //             created_on_dtm: 'string'
    //         })
    //     })
    //     .catch(function(error) {
    //         console.log(error)
    //     })

    // sequelize
    //     .sync({
    //         force: false,
    //         logging: console.log
    //     })
    //     .then(function() {
            
    //     })
    //     .catch(function(error) {
    //         console.log(error)
    //     })
    
    Action.removeAttribute('id'); 
    // Action.removeAttribute('createdAt');
	// Action.removeAttribute('updatedAt');
	
	Action.associate = function(models) {
		// associations can be defined here
	};

	return Action;
};