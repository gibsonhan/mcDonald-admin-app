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

const heroSchema = new mongoose.Schema({
  title: String,
  title2: String,
  img: String,
  titleContent: String,
  btnText: String,
  btnColor: String,
  navLink: String,
  dateExclude: String,
  legal: String,
});

heroSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Hero', heroSchema);
