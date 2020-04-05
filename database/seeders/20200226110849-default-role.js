module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_role',
		[
			{
				user_group_id: 1,
				data_json: '{"roles": [ {"menu": 1, "action": [{"id": 1}, {"id": 2}, {"id": 3}, {"id": 4}, {"id": 5}, {"id": 6}]}, {"menu": 2, "action": [{"id": 1}, {"id": 2}, {"id": 3}, {"id": 4}, {"id": 5}, {"id": 6}]}, {"menu": 3, "action": [{"id": 1}, {"id": 2}, {"id": 3}, {"id": 4}, {"id": 5}, {"id": 6}]}, {"menu": 4, "action": [{"id": 1}, {"id": 2}, {"id": 3}, {"id": 4}, {"id": 5}, {"id": 6}]}, {"menu": 5, "action": [{"id": 1}, {"id": 2}, {"id": 3}, {"id": 4}, {"id": 5}, {"id": 6}]} ]}',
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_role', null, { schema: 'public' }),
  };
  