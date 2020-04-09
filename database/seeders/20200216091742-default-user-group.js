module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_user_group',
		[
			{
				user_group_id: 1,
				user_group_name_var: 'administrator',
				active_status_boo: true,
				createdBy: 0,
				createdAt: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_user_group', null, { schema: 'public' }),
  };
  