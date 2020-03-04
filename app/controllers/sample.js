const models = require("../../database/models");

const createData = async (req, res) => {
	try {
		const data = await models.Action.create(req.body);
		return res.status(201).json({ code: 0, message: 'Data successfully added...', data });
	} catch (error) {
		return res.status(500).json({ code: 1, message: `${error.message}`, data: null });
	}
};

const getAllData = async (req, res) => {
	try {
		
		const data = await models.Action.findAll();
		if (data.length) {
			return res.status(200).json({ code: 0, message: 'Data Found...', data });
		}
		return res.status(200).json({ code: 1, message: 'Data Not Found...', data });

	} catch (error) {
		return res.status(500).send({ code: 1, message: `${error.message}`, data: null });
	}
};

const getDataById = async (req, res) => {
	try {
		const { dataId } = req.params;
		const data = await models.Action.findOne({
		where: { id: dataId },
		include: [
			{
			model: models.Comment,
			as: "comments",
			include: [
				{
				model: models.User,
				as: "author"
				}
			]
			},
			{
			model: models.User,
			as: "author"
			}
		]
		});
		if (data) {
		return res.status(200).json({ data });
		}
		return res.status(404).send("Data with the specified ID does not exists");
	} catch (error) {
		return res.status(500).send({ code: 1, message: `${error.message}`, data: null });
	}
};

const updateData = async (req, res) => {
  try {
    const { dataId } = req.params;
    const [updated] = await models.Action.update(req.body, {
      where: { id: dataId }
    });
    if (updated) {
      const updatedData = await models.Action.findOne({ where: { id: dataId } });
      return res.status(200).json({ data: updatedData });
    }
    throw new Error("Data not found");
  } catch (error) {
    return res.status(500).send({ code: 1, message: `${error.message}`, data: null });
  }
};

const deleteData = async (req, res) => {
  try {
    const { dataId } = req.params;
    const deleted = await models.Action.destroy({
      where: { id: dataId }
    });
    if (deleted) {
      return res.status(204).send("Data deleted");
    }
    throw new Error("Data not found");
  } catch (error) {
    return res.status(500).send({ code: 1, message: `${error.message}`, data: null });
  }
};

module.exports = {
	createData,
	getAllData,
	getDataById,
	updateData,
	deleteData
};