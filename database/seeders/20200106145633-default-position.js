module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_position',
		[
			{
				position_id: 1,
				position_name_var: 'Pembina',
				level_order_int: 1,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 2,
				position_name_var: 'Ketua Yayasan',
				level_order_int: 2,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 3,
				position_name_var: 'Penanggung Jawab Santri',
				level_order_int: 3,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 4,
				position_name_var: 'Sekretaris',
				level_order_int: 3,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 5,
				position_name_var: 'Bendahara',
				level_order_int: 3,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 6,
				position_name_var: 'Guru Tahsin/Tahfidz Reguler',
				level_order_int: 4,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 7,
				position_name_var: 'Guru Tahsin/Tahfidz Anak',
				level_order_int: 4,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 8,
				position_name_var: 'Staff Administrasi',
				level_order_int: 4,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 9,
				position_name_var: 'Sarana Prasarana',
				level_order_int: 4,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			},
			{
				position_id: 10,
				position_name_var: 'Musyrifah',
				level_order_int: 5,
				active_status_boo: true,
				created_by_int: 0,
				created_on_dtm: new Date(),
			}
		],
		{
			schema: 'public'
		},
	),
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_position', null, { schema: 'public' }),
  };
  