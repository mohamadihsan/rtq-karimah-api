module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_gender',
		[
			{
				gender_id: 1,
				gender_name_var: 'laki-laki',
				active_status_boo: true,
				createdBy: 0,
				createdAt: new Date(),
			},
			{
				gender_id: 2,
				gender_name_var: 'perempuan',
				active_status_boo: true,
				createdBy: 0,
				createdAt: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_gender', null, { schema: 'public' }),
  };
  