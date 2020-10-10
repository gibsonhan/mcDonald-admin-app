const Trend = require('../models/trend');

const create = async (req, res) => {
  const data = req.body;
  const trend = await new Trend({ ...data });
  try {
    trend.save();
    res.status(201).json(trend);
  } catch (error) {
    res.status(500).json('Failed to Create a Trend', error);
  }
};

const list = async (req, res) => {
  try {
    const trend = await Trend.find({});
    res.status(200).json(trend);
  } catch (error) {
    res.status(500).json('failed to fetch Trend list', error);
  }
};

const single = async (req, res) => {
  const id = req.params.id;
  try {
    const trend = await Trend.findById(id);
    await res.status(200).json(trend);
  } catch (error) {
    res.status(400).json('Failed to find Item', error);
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const message = `${data.title} was succesfully update`;
  try {
    await Trend.findByIdAndUpdate(id, data);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json('Failed to update item');
  }
};

const remove = async (req, res) => {
  const id = req.params.id;
  const message = `${id} was successfully deleted`;
  try {
    await Trend.findByIdAndRemove(id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json('fail to Delete', error);
  }
};

module.exports = {
  list,
  single,
  create,
  update,
  remove,
};
