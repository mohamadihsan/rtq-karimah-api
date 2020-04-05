module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_presence',
		[
			{
				presence_id: 1,
				description_var: 'Full Camera, GPS and Detect',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				presence_id: 2,
				description_var: 'Hidden Camera and GPS',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				presence_id: 3,
				description_var: 'GPS Only',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_presence', null, { schema: 'public' }),
  };
  