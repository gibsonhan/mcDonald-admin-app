const Hero = require('../models/hero');

const createHero = async (req, res) => {
  let data = req.body;
  const hero = await new Hero({ ...data });
  try {
    hero.save();
    res.status(201).json(hero);
  } catch (error) {
    res.status(500).json('Failed to Create a Coupon', error);
  }
};

const heroList = async (req, res) => {
  try {
    const hero = await Hero.find({});
    res.status(200).json(hero);
  } catch (error) {
    res.status(500).json('failed to fetch hero list', error);
  }
};

const singleHero = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    await res.status(200).json(item.toJSON());
  } catch (error) {
    res.status(400).json('Failed to find Item', error);
  }
};

const updateHero = async (req, res) => {
  const id = req.params.id;
  const newObject = req.params.body;
  const updateItem = newItem({ ...newObject });
  const message = `${updatedItem.name} was succesfully update`;
  try {
    await Item.findByIdAndUpdate(id, updateItem, { new: true });
    res.status(200).json(message, updateItem);
  } catch (error) {
    res.status(500).json('Failed to update item');
  }
};

const deleteHero = async (req, res) => {
  const id = req.params.id;
  const message = `${id} was successfully deleted`;
  try {
    await Hero.findByIdAndRemove(id);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json('fail to delete hero', error);
  }
};

module.exports = {
  heroList,
  singleHero,
  createHero,
  updateHero,
  deleteHero,
};
