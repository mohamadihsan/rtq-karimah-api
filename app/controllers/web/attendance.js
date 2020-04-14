/**
 * @author [author]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-13 13:19:28
 * @modify date 2020-04-13 13:19:28
 * @desc [Controller]
 */

const models = require('../../../database/models')

const history = async (req, res) => {

    try {

        // init
        let params              = req.body
        let attendanceTypeId    = req.body.attendance_type_id
        let companyId           = params.company_id
        let employeeId          = params.employee_id
        let locationId          = params.location_id
        let mechineId           = params.mechine_id
        let presenceId          = params.presence_id
        let userId              = params.user_id
        let startDateRange      = params.start_date_range
        let endDateRange        = params.end_date_range

        // where statement
        // by attendance type
        let whereAttendanceTypeId = ''
        if (attendanceTypeId) {
            if (attendanceTypeId === "0") {
                whereAttendanceTypeId = ` and atl.started_time is not null `
            }else{
                whereAttendanceTypeId = ` and atl.started_time is not null and atl.finished_time is not null `
            }
        }
        // by company
        let whereCompanyId = ''
        if (companyId) whereCompanyId = ` and atl.company_id = ${companyId} `
        // by employee
        let whereEmployeeId = ''
        if (employeeId) whereEmployeeId = ` and atl.employee_id = ${employeeId} `
        // by location
        let whereLocationId = ''
        if (locationId) whereLocationId = ` and atl.location_id = ${location_id} `
        // by mechine 
        let whereMechineId = ''
        if (mechineId) whereMechineId = ` and atl.mechine_id = ${mechine_id} `
        // by presence id
        let wherePresenceId = ''
        if (presenceId) wherePresenceId = ` and atl.presence_id = ${presenceId} `
        // by user
        let whereUserId = ''
        if (userId) whereUserId = ` and tu.user_id = ${userId} `
        // by time
        let whereTimeRange = ''
        if (startDateRange && endDateRange) {
            if (attendanceTypeId) {
                if (attendanceTypeId === "0") {
                    // rentang waktu absen masuk
                    whereTimeRange = ` and atl.started_time::DATE between '${startDateRange}' and '${endDateRange}' `
                }else{
                    // rentang waktu absen pulang
                    whereTimeRange = ` and atl.finished_time::DATE between '${startDateRange}' and '${endDateRange}' `
                }    
            }else{
                // rentang waktu absen masuk atau absen pulang
                whereTimeRange = ` and (atl.started_time::DATE between '${startDateRange}' and '${endDateRange}' or atl.finished_time::DATE between '${startDateRange}' and '${endDateRange}') `
            }
        }
			
        // get history by user
        let query = `select
            case 
                when atl.finished_time is not null then 
                    (select tat.attendance_type_name_var || ' - ' || tat2.attendance_type_name_var 
                        from public.t_attendance_type tat2 
                        where 
                            tat2.attendance_type_id = '1' 
                            and tat2.active_status_boo is true
                    )
                else tat.attendance_type_name_var || ' - Belum Konfirmasi'
            end attendance_type_name_var, 
            atl.started_time,
            atl.finished_time, 
            tp.description_var,
            te.nickname_var,
            tc.company_name_var,
            tl.location_name_var, 
            atl.image_var
        from
            transaction.t_attendance_list atl
        left join public.t_attendance_type tat on tat.attendance_type_id = atl.attendance_type_id 
        left join public.t_presence tp on tp.presence_id = atl.presence_id 
        left join master.t_employees te on te.employee_id = atl.employee_id
        left join public.t_user tu on tu.employee_id = te.employee_id 
        left join master.t_company tc on tc.company_id = atl.company_id
        left join master.t_location tl on tl.location_id = atl.location_id 
        where
            atl.active_status_boo is true
            ${whereAttendanceTypeId}
            ${whereCompanyId}
            ${whereEmployeeId}
            ${whereLocationId}
            ${whereMechineId}
            ${wherePresenceId}
            ${whereUserId}
            ${whereTimeRange}
        order by
            atl.started_time desc`;

        const getHistory = await models.sequelize.query(query, {
            plain: false,
            raw: false,
            type: models.sequelize.QueryTypes.SELECT
        });

        if (getHistory.length) {
            
            return res.status(200).json({ code: 0, message: 'Attendance history found...', data: getHistory });

        }
		
		return res.status(200).json({ code: 1, message: 'No attendance history...', data: {} });
        
    } catch (error) {
		// error message
		return res.status(200).json({ code: 1, message: `${error.message}`, data: {} });
    }

}

module.exports = {
    history
}