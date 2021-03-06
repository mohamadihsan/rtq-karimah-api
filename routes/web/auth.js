/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-24 16:31:42
 * @desc [ Routes ]
 */

const { Router } = require('express');
// import middleware
const auth = require('../../app/middlewares/authenticate');
const router = Router();

// login
router.post('/auth/login', auth.login);
router.post('/auth/login-im', auth.loginIM);

module.exports = router;