const Trend = require('../models/trend');

exports.list = (req, res) => {
  res.send('list');
};

exports.id = (req, res) => {
  let body = req.params;
  res.send(body);
};

exports.create = (req, res) => {
  res.send('create');
};

exports.update = (req, res) => {
  res.send('update');
};

exports.delete = (req, res) => {
  res.send('delete');
};
