/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-24 16:31:42
 * @desc [ Routes ]
 */

const { Router } = require('express');
// import middleware
const isAuthenticated = require('../app/middlewares/verify-token')
const auth = require('../app/middlewares/authenticate');
// import controller
const controllerAction      = require('../app/controllers/action');
const controllerMenuGroup   = require('../app/controllers/menu-group');
const controllerMenu        = require('../app/controllers/menu');
const controllerRole        = require('../app/controllers/role');
const controllerUserGroup   = require('../app/controllers/user-group');
const controllerUser        = require('../app/controllers/user');

const router = Router();

// default
router.get('/', (req, res) => res.status(200).json({ author: 'Mohamad Ihsan', contact: 'mohamad_ihsan100@yahoo.co.id', company: 'PT.Nutech Integrasi', description: 'API untuk System Management' }));

// isAuthenticated menandakan bahwa url harus disertakan dengan token

// action
router.post('/action',                  isAuthenticated, controllerAction.createData);
router.get('/action',                   isAuthenticated, controllerAction.getAllData);
router.get('/action/:id',               isAuthenticated, controllerAction.getDataById);
router.put('/action/:id',               isAuthenticated, controllerAction.updateData);
router.delete('/action/:id',            isAuthenticated, controllerAction.deleteData);
router.delete('/action',                isAuthenticated, controllerAction.deleteManyData);
router.delete('/truncate-action',       isAuthenticated, controllerAction.truncateData);
// menu group
router.post('/menu-group',              isAuthenticated, controllerMenuGroup.createData);
router.get('/menu-group',               isAuthenticated, controllerMenuGroup.getAllData);
router.get('/menu-group/:id',           isAuthenticated, controllerMenuGroup.getDataById);
router.put('/menu-group/:id',           isAuthenticated, controllerMenuGroup.updateData);
router.delete('/menu-group/:id',        isAuthenticated, controllerMenuGroup.deleteData);
router.delete('/menu-group',            isAuthenticated, controllerMenuGroup.deleteManyData);
router.delete('/truncate-menu-group',   isAuthenticated, controllerMenuGroup.truncateData);
// menu
router.post('/menu',                    isAuthenticated, controllerMenu.createData);
router.get('/menu',                     isAuthenticated, controllerMenu.getAllData);
router.get('/menu/:id',                 isAuthenticated, controllerMenu.getDataById);
router.put('/menu/:id',                 isAuthenticated, controllerMenu.updateData);
router.delete('/menu/:id',              isAuthenticated, controllerMenu.deleteData);
router.delete('/menu',                  isAuthenticated, controllerMenu.deleteManyData);
router.delete('/truncate-menu',         isAuthenticated, controllerMenu.truncateData);
// role
router.post('/role',                    isAuthenticated, controllerRole.createData);
router.get('/role',                     isAuthenticated, controllerRole.getAllData);
router.get('/role/:id',                 isAuthenticated, controllerRole.getDataById);
router.put('/role/:id',                 isAuthenticated, controllerRole.updateData);
router.delete('/role/:id',              isAuthenticated, controllerRole.deleteData);
router.delete('/role',                  isAuthenticated, controllerRole.deleteManyData);
router.delete('/truncate-role',         isAuthenticated, controllerRole.truncateData);
router.get('/my-role/',                 isAuthenticated, controllerRole.getDataByUserLogin);
// user group
router.post('/user-group',              isAuthenticated, controllerUserGroup.createData);
router.get('/user-group',               isAuthenticated, controllerUserGroup.getAllData);
router.get('/user-group/:id',           isAuthenticated, controllerUserGroup.getDataById);
router.put('/user-group/:id',           isAuthenticated, controllerUserGroup.updateData);
router.delete('/user-group/:id',        isAuthenticated, controllerUserGroup.deleteData);
router.delete('/user-group',            isAuthenticated, controllerUserGroup.deleteManyData);
router.delete('/truncate-user-group',   isAuthenticated, controllerUserGroup.truncateData);
// user
router.post('/user',                    isAuthenticated, controllerUser.createData);
router.get('/user',                     isAuthenticated, controllerUser.getAllData);
router.get('/user/:id',                 isAuthenticated, controllerUser.getDataById);
router.put('/user/:id',                 isAuthenticated, controllerUser.updateData);
router.delete('/user/:id',              isAuthenticated, controllerUser.deleteData);
router.delete('/user',                  isAuthenticated, controllerUser.deleteManyData);
router.delete('/truncate-user',         isAuthenticated, controllerUser.truncateData);


module.exports = router;