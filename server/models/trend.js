const mongoose = require('mongoose');
//mongoose.set('useFindAndMondify', false)
const url = process.env.MONGODB_URI;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(' connected to MONGOD DB!');
  })
  .catch((error) => {
    console.log('error connecting to MONGOD DB', error.message);
  });

const trendSchema = new mongoose.Schema({
  title: String,
  title2: String,
  img: String,
  btnText: String,
  btnColor: String,
  navLink: String,
  dateRestriction: String,
  legal: String,
});

trendSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Trend', trendSchema);
