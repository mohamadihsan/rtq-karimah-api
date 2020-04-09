/**
 * @author [author]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-09 17:24:59
 * @modify date 2020-04-09 17:24:59
 * @desc [ Transaksi Kehadiran (Absen Masuk / Pulang / Lainnya)  ]
 */

const models = require('../../../database/models')

//  attendance transaction
const saveAttendanceList = async(req, res) => {
	
	try {
		// success create new data
		const data = await models.AttendanceList.create(req.body);
		
		if(data){
            return res.status(201).json({ code: 0, message: 'Your attendance has been confirmed successfully...', data });
        }

		return res.status(200).json({ code: 1, message: 'Your attendance failed to be confirmed...', data});
		
	} catch (error) {
		// error message
		return res.status(200).json({ code: 1, message: `${error.message}`, data: null });
	}

}

module.exports = {
	saveAttendanceList
}