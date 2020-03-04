/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Controller ]
 */

const groupArray    = require('group-array')
const models        = require("../../database/models");

// create new data
const createData = async (req, res) => {
	try {
		// success create new data
        const data = await models.Role.bulkCreate(req.body);
        
        if(data.length){
            return res.status(201).json({ code: 0, message: 'Data successfully added...', data });
        }

        return res.status(200).json({ code: 1, message: 'Data failed added...', data});

	} catch (error) {
		// error message
		return res.status(200).json({ code: 1, message: `${error.message}`, data: null });
	}
};

// get all data
const getAllData = async (req, res) => {
	try {
		const data = await models.Role.findAll();
		if (data.length) {
			// data has been found
			return res.status(200).json({ code: 0, message: 'Data Found...', data });
		}
		// data not found
		return res.status(200).json({ code: 1, message: 'Data Not Found...', data });

	} catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: null });
	}
};

// get one data by id
const getDataById = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await models.Role.findOne({ where: { user_group_id: id } });

		if (data) {
			// data has been found
			return res.status(200).json({ code: 0, message: 'Data Found...', data });
		}
		// data not found
		return res.status(200).send({ code: 1, message: "Data with the specified ID does not exists", data: null });

	} catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: null });
	}
};

// update data by id
const updateData = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await models.Role.findOne({ where: { user_group_id: id } });

		if (data) {

            // update
            const updated = await models.Role.update(req.body, {
                where: { user_group_id: id }
            });

			if (updated.length) {
				// success update
				const updatedData = await models.Role.findOne({ where: { user_group_id: id } });
				return res.status(200).json({ code: 0, message: 'Data successfully updated...', data: updatedData });
            }
            
            return res.status(200).json({ code: 1, message: 'Data failed to update...', data: null });
            
		}
		// data id not found
		return res.status(200).send({ code: 1, message: "Data with the specified ID does not exists", data: null });

	} catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: null });
	}
};

// delete data by id
const deleteData = async (req, res) => {
	try {
		const { id } = req.params;
		const deleted = await models.Role.destroy({ where: { user_group_id: id } });
		
		// console.log(deleted)
		if (deleted) {
			// success delete
			return res.status(200).send({ code: 0, message: 'Data successfully deleted...', data: null });
		}
		// data id not found
		return res.status(200).send({ code: 1, message: "Data with the specified ID does not exists", data: null });
		
	} catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: null });
	}
};

// delete many data by id
const deleteManyData = async (req, res) => {
	try {

		var id = [];
		var i=0;
		req.body.map(data => {
			id[i++] = data.id
		})
		
		// init transaction
		const deleted = await models.sequelize.transaction(async (t) => {
			const data = await models.Role.destroy({ where: { user_group_id: id } }, { transaction: t });

			return data;
		});
		
		if (deleted) { 
			return res.status(200).send({ code: 0, message: 'Data successfully deleted...', data: null });
		}
			
		// data id not found
		return res.status(200).send({ code: 1, message: "Data with the specified ID does not exists", data: null });
		
	} catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: null });
	}
};

// role user login
const getDataByUserLogin = async (req, res) => {
	try {
        // bind req
        const username_var = req.decoded.username_var;
        const user_group_id = req.decoded.user_group_id;
        
        const data = await models.User.findOne({ where: { username_var: username_var } });

        if (data) {

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
                replacements: {id: user_group_id},
                
                // log
                logging: console.log,

                // If plain is true, then sequelize will only return the first // record of the result set. In case of false it will return all records.
                plain: false,

                // Set this to true if you don't have a model definition for your query.
                raw: false,

                // The type of query you are executing. The query type affects how results are formatted before they are passed back.
                type: models.sequelize.QueryTypes.SELECT
            });

            // create format json menjadi grouping berdasarkan menu_group_name_var 
            const role = groupArray(roles, 'menu_group_name_var', 'menu_name_var');
        
           
            // data has been found
            return res.status(200).json({ code: 0, message: 'Role Found...', data: {role : role} });
                 
        }

        // data not found
        return res.status(200).send({ code: 1, message: "User does not exists. Please login again!", data: null });

	} catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: null });
	}
};

// truncate data
const truncateData = async (req, res) => {
	try {
		await models.Role.destroy({ truncate: true, restartIdentity: true });
		
		// success truncate
		return res.status(200).send({ code: 0, message: 'Data successfully truncated...', data: null });
		
	} catch (error) {
		// error message
		return res.status(200).send({ code: 1, message: `${error.message}`, data: null });
	}
};

// export
module.exports = {
	createData,
	getAllData,
	getDataById,
	updateData,
	deleteData,
    deleteManyData,
    truncateData,
    getDataByUserLogin
};