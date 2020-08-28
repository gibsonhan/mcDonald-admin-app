//Import Mongose
//Connect to mongo server
//Create schema
///export

const mongoose = require('mongoose');
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(' connected to MONGOD DB!');
  })
  .catch((error) => {
    console.log('error connecting to MONGOD DB', error.message);
  });

const url = process.env.MONGODB_URI;

const menuSchema = new mongoose.Schema({
  name: String,
  subGroup: {
    name: String,
    items: Array,
  },
  items: Array,
  couponGroup: Array,
  created: Date,
  lastEdit: {
    date: Date,
    author: String,
  },
});

module.exports = mongoose.model('Menu', menuSchema);
