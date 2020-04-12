/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-04-04 23:30:08
 * @modify date 2020-04-04 23:30:08
 * @desc [ Controller ]
 */

const Hash          = require('../../helpers/hash');
const jwt           = require('jsonwebtoken');
const models        = require("../../../database/models");
const groupArray    = require('group-array')

// login
const login = async (req, res) => {
	try {
		const { username_var, password_var, remember_boo } = req.body;
        const data = await models.User.findOne({ where: { username_var: username_var } });

        if (data) {
            // cek password
            if (Hash.comparePassword(password_var, data.password_var)) {
            
                try {
                    
                    // insert or update device id to user
                    await models.User.update({device_id_var: req.body.device_id_var}, {
                        where: { user_id: data.user_id }
                    });

                    // query dengan cara lain 
                    // let query = `UPDATE t_user SET device_id_var = (:device_id_var) WHERE user_id = (:user_id)`
                    // await models.sequelize.query(query, {
                    //     replacements: {device_id_var: req.body.device_id_var, user_id: data.user_id},
                    //     type: models.sequelize.QueryTypes.INSERT
                    // });
                    
                } catch (error) {
                    // error message
                    return res.status(200).json({ code: 1, message: `${error.message}`, data: null });
                }

                // init
                let identity_number_var = null;
                let fullname_var = null;
                let nickname_var = null;
                let gender_name_var = null;
                let company_name_var = null;
                let position_name_var = null;
                let logo_var = null;
                let location = [];

                if (data.employee_id) {
                    
                    // get employee detail berdasarkan user id login
                    let query = `select
                        te.employee_id,
                        te.identity_number_var,
                        te.fullname_var,
                        te.nickname_var,
                        tc.company_id,
                        tc.company_name_var,
                        tc.logo_var,
                        tp.position_name_var,
                        tg.gender_name_var
                    from
                        master.t_employees te
                    left join master.t_company tc on
                        tc.company_id = te.company_id
                    left join public.t_position tp on
                        tp.position_id = te.position_id
                    left join public.t_gender tg on
                        tg.gender_id = te.gender_id
                    where
                        te.employee_id = (:employee_id)`;

                    const employee = await models.sequelize.query(query, {
                        // bind id
                        replacements: {employee_id: data.employee_id},
                        plain: false,
                        raw: false,
                        type: models.sequelize.QueryTypes.SELECT
                    });

                    if (employee) {
                        
                        // get location berdasarkan data lembaga / perusahaan 
                        location = await models.Location.findAll({ 
                            attributes: ['location_id', 'location_name_var', 'country_name_var', 'city_name_var', 'longitude', 'latitude'],
                            where: { 
                                company_id: employee[0].company_id, 
                                active_status_boo: true
                            } 
                        });

                        // bind data
                        identity_number_var = employee[0].identity_number_var;
                        fullname_var = employee[0].fullname_var;
                        nickname_var = employee[0].nickname_var;
                        gender_name_var = employee[0].gender_name_var;
                        company_name_var = employee[0].company_name_var;
                        position_name_var = employee[0].position_name_var;
                        logo_var = employee[0].logo_var;
                    }
                }
            
                // get settingan absensi berdasarkan user id login
                let presence_id = null;
                const userSetting = await models.UserSetting.findOne({ where: { user_id: data.user_id } });
                if (userSetting) {
                    presence_id = userSetting.presence_id;
                }
                
                // query get role
                let query = `select
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
                }, process.env.JWT_KEY, {});

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
                return res.status(200).json({ 
                    code: 0, 
                    message: 'Login is valid. Redirect to home page...', 
                    data: {
                        token: token, 
                        user: {
                            user_group: data.user_group_id,
                            presence_status: presence_id,
                            identity_number: identity_number_var,
                            fullname: fullname_var,
                            nickname: nickname_var,
                            gender: gender_name_var, 
                            email: data.email_var,
                            position: position_name_var
                        },
                        company: {
                            name: company_name_var,
                            location: location,
                            logo: logo_var
                        }, 
                        role : role
                    } 
                });
                
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

// export
module.exports = {
    login
};