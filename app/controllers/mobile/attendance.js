/**
 * @author [author]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-09 17:24:59
 * @modify date 2020-04-09 17:24:59
 * @desc [ Transaksi Kehadiran (Absen Masuk / Pulang / Lainnya)  ]
 */

const { check, validationResult } = require('express-validator/check')
const moment = require('moment')
const models = require('../../../database/models')

// validate request
const validate = (method) => {
	switch (method) {
		case 'newAttendanceList': {
			return [ 
				check('attendance_type_id', 'Invalid format. Parameter must be Numeric').isNumeric(),
				check('presence_id', 'Invalid format. Parameter must be Numeric').isNumeric(),
				check('employee_id', 'Invalid format. Parameter must be Numeric').isNumeric(),
				check('longitude', 'Invalid format. Parameter must be Float').isFloat(),
				check('latitude', 'Invalid format. Parameter must be Float').isFloat(),
				// check('image_var', 'Invalid format for Image').isBase64()
			]   
		}
	}
}

// validate attendance transaction
const validateAttendanceList = async (req, res) => {
	try {
		// bind param
		let employee_id = req.body.employee_id 
		const findData = await models.Employees.findOne({ 
			where: { 
				employee_id: employee_id, 
				active_status_boo: true	
			}
		});

		if (findData) {

			let query = `select
				te.employee_id,
				te.nickname_var,
				te.company_id, 
				tus.presence_id,
				case
					when te.shift_status_boo is false then
						(select 
							case 
								when tal.finished_time is not null and tal.attendance_list_id is not null then 0
								when tal.finished_time is null and tal.attendance_list_id is not null then 1
								else -1
							end attendance_type_id
							from transaction.t_attendance_list tal
							where
								tal.active_status_boo is true
								and tal.created_at::DATE = (:created_at) 
							order by tal.created_at desc limit 1 	
						)
					when te.shift_status_boo is true then
						(select 
							case 
								when tal.finished_time is not null and tal.attendance_list_id is not null then 0
								when tal.finished_time is null and tal.attendance_list_id is not null then 1
								else -1
							end attendance_type_id	
							from transaction.t_attendance_list tal
							where
								tal.active_status_boo is true
								and tal.created_at::DATE BETWEEN (:yesterday) and (:created_at)  
							order by tal.created_at desc limit 1
						)
				end attendance_type_id,
				te.shift_status_boo as cross_day_boo
			from
				public.t_user tu
			left join master.t_employees te on te.employee_id = tu.employee_id 	
			left join public.t_user_setting  tus on tus.user_id = tu.user_id 	
			where
				tu.employee_id = (:employee_id)
				and tu.active_status_boo is true
				and tus.active_status_boo is true 
				and te.active_status_boo is true`;
			
			const findDetail = await models.sequelize.query(query, {
				// bind id
				replacements: {
					employee_id: employee_id,
					created_at: moment().format('YYYY-MM-DD'),
					yesterday: findData.shift_status_boo === true ? moment().add(-1,'days').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
				},
				plain: false,
				raw: false,
				type: models.sequelize.QueryTypes.SELECT
			});

			let attendanceTypeId = 0;
			

			// response
			let response = {
				attendance_type_id: attendanceTypeId, 
				presence_id: null,
				employee_id: employee_id,
				company_id: findData.company_id,
				cross_day_boo: findData.shift_status_boo
			}
			
			if (findDetail.length) {

				let data = findDetail[0]
				attendanceTypeId = data.attendance_type_id === null ? 0 : data.attendance_type_id
				// response
				response = {
					attendance_type_id: attendanceTypeId, 
					presence_id: data.presence_id,
					employee_id: data.employee_id,
					company_id: data.company_id,
					cross_day_boo: data.cross_day_boo
				}

			}

			if (attendanceTypeId === 0) {
				return res.status(201).json({ code: 0, message: 'Yakin akan melakukan absen Masuk?', data: response });
			}

			return res.status(201).json({ code: 0, message: 'Yakin akan melakukan absen Pulang?', data: response });
		}

		return res.status(200).json({ code: 1, message: 'Data not found...', data: {} });

	} catch (error) {
		// error message
		return res.status(200).json({ code: 1, message: `${error.message}`, data: {} });
	}
}

//  attendance transaction
const newAttendanceList = async(req, res) => {
	
	try {
		// bind param
		let attendance_type_id 	= req.body.attendance_type_id  
		let presence_id 		= req.body.presence_id 
		let employee_id 		= req.body.employee_id 
		let company_id 			= req.body.company_id 
		let location_name_var 	= req.body.location_name_var 
		let longitude 			= req.body.longitude 
		let latitude 			= req.body.latitude 
		let image_var 			= req.body.image_var 
		let active_status_boo 	= true 
		let createdAt 			= moment() 
		let createdBy 			= req.body.employee_id
		let cross_day_boo 		= req.body.cross_day_boo 
		let started_time		= moment()

		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(200).json({ code: 1, message: 'Invalid Parameter Request', errorForDevelopement: errors.array(), data: {} });
		}
		
		if (attendance_type_id === 0) {
		
			// success create new data (absen masuk)
			const data = await models.AttendanceList.create({
				attendance_type_id,
				presence_id,
				employee_id,
				company_id,
				location_name_var,
				longitude,
				latitude,
				image_var,
				active_status_boo,
				createdAt,
				createdBy,
				started_time
			});
			
			if(data){
				return res.status(201).json({ code: 0, message: 'Your attendance has been confirmed successfully...', data });
			}

		}else{
			
			// const findData = await models.AttendanceList.findOne({
			// 	// where: [ models.sequelize.where(sequelize.fn('DATE', sequelize.col('createdAt')), '2020-04-11') ], 
			// 	where: { 
			// 		employee_id: employee_id, 
			// 		updatedAt: null,
					
			// 	}, 
			// 	order: [
			// 		[ 'createdAt', 'DESC']
			// 	] 
			// });

			// find pair data 
			let query = `SELECT * 
			FROM transaction.t_attendance_list 
			WHERE 
				employee_id = (:employee_id)
				and finished_time is null
				and created_at::DATE = (:created_at)`;

			const findData = await models.sequelize.query(query, {
				// bind id
				replacements: {
					employee_id: employee_id,
					created_at: cross_day_boo === true ? moment().add(-1,'days').format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
				},
				plain: false,
				raw: false,
				type: models.sequelize.QueryTypes.SELECT
			});

			if (findData.length) {
				
				// bind data 
				let updatedAt 		= moment() 
				let updatedBy 		= req.body.employee_id 
				let finished_time 	= moment() 

				// success create new data (absen pulang)
				const data = await models.AttendanceList.update({
					updatedAt,
					updatedBy,
					finished_time
				},
				{
					where: { attendance_list_id: findData[0].attendance_list_id }
				});
				
				if(data){
					return res.status(201).json({ code: 0, message: 'Your attendance has been confirmed successfully...', data: findData });
				}
			}
			
			return res.status(200).json({ code: 1, message: 'Your attendance has been rejected...', data: {} });

		}
		
		return res.status(200).json({ code: 1, message: 'Your attendance failed to be confirmed...', data: {} });
		
	} catch (error) {
		// error message
		return res.status(200).json({ code: 1, message: `${error.message}`, data: {} });
	}

}

module.exports = {
	validate,
	validateAttendanceList,
	newAttendanceList
}