const Item  = require('../models/item')

const itemList = (req, res) => {
    res.send('list')
}

const item = (req, res) => {
  let body = req.params;
  res.send(body)
}

const createItem = (req, res) => {
    res.send('create')
}

const updateItem = (req, res) => {
    res.send('update')
}

const deleteItem = (req, res) => {
    res.send('delete')
}

module.exports = {
    itemList,
    item,
    createItem,
    updateItem,
    deleteItem,
}