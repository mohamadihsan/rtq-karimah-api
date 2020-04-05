module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_action',
		[
			{
				// action_id: 1,
				action_name_var: 'create',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				// action_id: 2,
				action_name_var: 'read / view',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				// action_id: 3,
				action_name_var: 'update',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				// action_id: 4,
				action_name_var: 'delete',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				// action_id: 5,
				action_name_var: 'download',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				// action_id: 6,
				action_name_var: 'approve',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_action', null, { schema: 'public' }),
  };
  