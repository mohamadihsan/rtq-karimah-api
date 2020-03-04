/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Model ]
 */

'use strict';
module.exports = (sequelize, DataTypes) => {

    const SetupApp = sequelize
        .sync({
            force: false,
            logging: console.log
        })
        .then(function() {
            
        })
        .catch(function(error) {
            console.log(error)
        })


	return SetupApp;
};