/**
 * @author [Mohamad Ihsan]
 * @email [ihsan.nutech@gmail.com]
 * @create date 2020-02-16 12:06:03
 * @modify date 2020-02-16 12:06:03
 * @desc [ Controller ]
 */

const models = require("../../database/models");

// create new data
const createData = async (req, res) => {
	try {
		// success create new data
        const data = await models.MenuGroup.bulkCreate(req.body);
        
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
		const data = await models.MenuGroup.findAll();
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
		const data = await models.MenuGroup.findOne({ where: { menu_group_id: id } });

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
		const data = await models.MenuGroup.findOne({ where: { menu_group_id: id } });

		if (data) {

            // update
            const updated = await models.MenuGroup.update(req.body, {
                where: { menu_group_id: id }
            });

			if (updated.length) {
				// success update
				const updatedData = await models.MenuGroup.findOne({ where: { menu_group_id: id } });
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
		const deleted = await models.MenuGroup.destroy({ where: { menu_group_id: id } });
		
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
			const data = await models.MenuGroup.destroy({ where: { menu_group_id: id } }, { transaction: t });

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

// truncate data
const truncateData = async (req, res) => {
	try {
		await models.MenuGroup.destroy({ truncate: true, restartIdentity: true });
		
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
    truncateData
};