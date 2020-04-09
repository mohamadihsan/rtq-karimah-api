/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-09 20:08:23
 * @modify date 2020-04-09 20:08:23
 * @desc [ Routes ]
 */

const { Router } = require('express');
// import middleware
const isAuthenticated = require('../../app/middlewares/verify-token')

// import controller
const controllerAttendance  = require('../../app/controllers/mobile/attendance');

const router = Router();

// isAuthenticated menandakan bahwa url harus disertakan dengan token

// action
router.post('/attendance/new', isAuthenticated, controllerAttendance.saveAttendanceList);

module.exports = router;