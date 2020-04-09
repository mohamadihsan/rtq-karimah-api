module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_user_setting',
		[
			{
				user_id: 1,
				presence_id: 1,
				active_status_boo: true,
				createdBy: 0,
				createdAt: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_user_setting', null, { schema: 'public' }),
  };
  