module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_user',
		[
			{
				// user_id: 1,
				username_var: 'admin',
				password_var: '$2a$08$VRfehKWEn7FQv4oK/QodaeAlmcD8E7sbXt71CjCBZQh4SyCXRrX3C',
				email_var: 'mohamad_ihsan100@yahoo.co.id',
				user_group_id: 1,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
				updated_on_dtm: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_user', null, { schema: 'public' }),
  };
  