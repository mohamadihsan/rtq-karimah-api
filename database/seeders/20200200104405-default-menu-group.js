module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
		't_menu_group',
		[
			{
				// menu_group_id: 1,
				menu_group_name_var: 'role management',
				menu_group_order_int: null,
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
  
	down: (queryInterface, Sequelize) => queryInterface.bulkDelete('t_menu_group', null, { schema: 'public' }),
  };
  