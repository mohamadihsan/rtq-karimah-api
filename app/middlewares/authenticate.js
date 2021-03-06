/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-24 21:06:17
 * @desc [ Middleware ]
 */

const Hash          = require('../helpers/hash');
const jwt           = require('jsonwebtoken');
const models        = require("../../database/models");
const groupArray    = require('group-array')

// login
const login = async (req, res) => {
	try {
		const { username_var, password_var, remember_boo } = req.body;
        const data = await models.User.findOne({ where: { username_var: username_var } });

        if (data) {
            // cek password
            if (Hash.comparePassword(password_var, data.password_var)) {

                // query get role
                const query = `select
                    mg.menu_group_name_var,
                    x.menu_id, 
                    m.menu_name_var, 
                    m.url_var, 
                    m.icon_var,
                    x.action_id, 
                    ta.action_name_var 
                from (
                    select 
                        tr.user_group_id, 
                        ug.user_group_name_var, 
                        (json_array_elements((data_json ->> 'roles')::json) ->> 'menu')::INT as menu_id, 
                        (json_array_elements((json_array_elements((data_json ->> 'roles')::json) ->> 'action')::json) ->> 'id')::INT as action_id 
                    from public.t_role tr 
                    left join public.t_user_group ug on ug.user_group_id = tr.user_group_id 
                    where ug.user_group_id = (:id) -- sesuai user group saat login user
                ) x
                left join public.t_menu m on m.menu_id = x.menu_id 
                left join public.t_action ta on ta.action_id = x.action_id
                left join public.t_menu_group mg on mg.menu_group_id = m.menu_group_id
                order by 
                    x.user_group_id,
                    mg.menu_group_order_int,
                    x.menu_id`;

                // get role berdasarkan user group 
                const roles = await models.sequelize.query(query, {
                    // bind id
                    replacements: {id: data.user_group_id},
                    
                    // log
                    logging: console.log,

                    // If plain is true, then sequelize will only return the first
                    // record of the result set. In case of false it will return all records.
                    plain: false,

                    // Set this to true if you don't have a model definition for your query.
                    raw: false,

                    // The type of query you are executing. The query type affects how results are formatted before they are passed back.
                    type: models.sequelize.QueryTypes.SELECT
                });

                // create format json menjadi grouping berdasarkan menu_group_name_var 
                const role = groupArray(roles, 'menu_group_name_var', 'menu_name_var');
            
                // generate token dan set tanggal expired token
                const token = jwt.sign({ 
                    user_id: data.user_id,  
                    username_var: data.username_var,  
                    user_group_id: data.user_group_id,  
                    email_var: data.email_var
                }, process.env.JWT_KEY, { expiresIn: '7d' });

                // jika user memilih remember me untuk data login nya
                if (remember_boo === true) {
                    // simpan token ke table user
                    await models.User.update({
                            token_text: token, 
                            updated_on_dtm: new Date(),
                            updated_by_int: data.user_id
                        }, {
                        where: { user_id: data.user_id }
                    });
                }

                // data has been found
                return res.status(200).json({ code: 0, message: 'Login is valid. Redirect to home page...', data: {token: token, role : role} });
                
            }else{
                return res.status(200).send({ code: 1, message: "Please check your password!", data: null });
            }   
        }

        // data not found
        return res.status(200).send({ code: 1, message: "User does not exists. Please check your username and password!", data: null });

	} catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: null });
	}
};


const loginIM = (req, res) => {

    try {

        let key_terminal_var = req.body.key_terminal_var
        let terminal_code_var = req.body.terminal_code_var
        let ip_address_var = req.body.ip_address_var
        let mac_address_var = req.body.mac_address_var
        let username_var = req.body.username_var
        let password_var = req.body.password_var

        let loginStatus = false
        if (key_terminal_var === "im" && terminal_code_var === "020107" && ip_address_var === "192.168.1.9" && mac_address_var === "00-F4-8D-B9-8A-7D"){

            if (username_var === "admin" && password_var === "admin") {

                return res.status(200).send({ 
                    code: 0, 
                    message: "Account has been verified!", 
                    data: {
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMiIsInVzZXJuYW1lX3ZhciI6ImlyZmFuIiwidXNlcl9ncm91cF9pZCI6MiwiZW1haWxfdmFyIjoiaXJmYW5yYW5nZ2ExNkB5YWhvby5jb20iLCJpYXQiOjE1ODY2NzUzMTEsImV4cCI6MTU4NzI4MDExMX0.4GVmcVzzUNU14d0x0KXwcNtJj2DDvevJFo9IeoXrumQ" 
                    } 
                });
                
            }
            
            return res.status(200).send({ code: 1, message: "Please check your account!", data: {} });

        } else{
            
            return res.status(200).send({ code: 1, message: "Device not register!", data: {} });

        }

        
    } catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: {} });        
    }

}

// export
module.exports = {
    login,
    loginIM
};