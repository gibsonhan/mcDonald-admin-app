const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(' connected to MONGOD DB!');
  })
  .catch((error) => {
    console.log('error connecting to MONGOD DB', error.message);
  });

const menuSchema = new mongoose.Schema({
  name: String,
  img: String,
  subMenu: {
    length: Number,
    list: Object,
  },
  created: Date,
  lastEdit: {
    date: Date,
    author: String,
  },
});

menuSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Menu', menuSchema);
