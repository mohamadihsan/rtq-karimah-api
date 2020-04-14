/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-13 13:24:25
 * @modify date 2020-04-13 13:24:25
 * @desc [ Routes ]
 */

const { Router } = require('express');
// import middleware
const isAuthenticated = require('../../app/middlewares/verify-token')

// import controller
const controllerAttendance  = require('../../app/controllers/web/attendance');

const router = Router();

// isAuthenticated menandakan bahwa url harus disertakan dengan token

// action
router.post('/attendance/history', isAuthenticated, controllerAttendance.history);

module.exports = router;