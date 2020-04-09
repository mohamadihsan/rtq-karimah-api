module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_attendance_type',
		[
			{
				attendance_type_id: 1,
				attendance_type_code_var: '0',
				attendance_type_name_var: 'Absen Masuk',
				active_status_boo: true,
				createdBy: 0,
				createdAt: new Date(),
			},
			{
				attendance_type_id: 1,
				attendance_type_code_var: '1',
				attendance_type_name_var: 'Absen Pulang',
				active_status_boo: true,
				createdBy: 0,
				createdAt: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_attendance_type', null, { schema: 'public' }),
  };
  