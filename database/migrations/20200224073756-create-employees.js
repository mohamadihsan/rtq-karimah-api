'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('t_employees', {
			employee_id: {
				type: Sequelize.BIGINT,
				primaryKey: true,
				autoIncrement: true
			},
			identity_number_var: {
				type: Sequelize.STRING(25),
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
				type: Sequelize.STRING(100),
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
				type: Sequelize.STRING(15),
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
				type: Sequelize.INTEGER,
				allowNull: true 
			},  
			place_of_birth_var: {
				type: Sequelize.STRING(50),
				allowNull: true 
			},
			date_of_birth_on_dtm: {
				type: Sequelize.DATE,
				allowNull: true 
			},
			address_var: {
				type: Sequelize.STRING(255),
				allowNull: true
			},
			religion_id: {
				type: Sequelize.INTEGER,
				allowNull: true 
			}, 
			marital_status_id: {
				type: Sequelize.INTEGER,
				allowNull: true 
			},
			company_id: {
				type: Sequelize.INTEGER,
				allowNull: true 
			},
			position_id: {
				type: Sequelize.INTEGER,
				allowNull: true 
			},
			employment_status_id: {
				type: Sequelize.INTEGER,
				allowNull: true
			},
			join_date_on_dtm: {
				type: Sequelize.DATE,
				allowNull: true 
			},
			active_status_boo: {
				type: Sequelize.BOOLEAN,
				allowNull: false 
			},
			created_on_dtm: {
				type: Sequelize.DATE,
				allowNull: false 
			},
			created_by_int: {
				type: Sequelize.BIGINT
			},
			updated_on_dtm: {
				type: Sequelize.DATE
			},
			updated_by_int: {
				type: Sequelize.BIGINT
			},
			deleted_on_dtm: {
				type: Sequelize.DATE
			},
			deleted_by_int: {
				type: Sequelize.BIGINT
			}
		}, 
		{
			schema: 'master',
			uniqueKeys: {
				actions_unique:
				{
					fields: ['identity_number_var', 'active_status_boo']
				}
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('t_employees', { schema: 'master' });
	}
};