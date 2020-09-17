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

const couponSchema = new mongoose.Schema({
  title: String,
  titleContent: String,
  img: String,
  //reoccurance: String,
  expiration: String,
  /*
  couponGroup: {
    Menu: Array,
    MenuSubGroup: Array,
    Items: Array,
  },
  qrCode: String,
  */
  legal: String,
  //scanIndoor: Boolean,
  //pickUp: Boolean,
});

couponSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Coupon', couponSchema);
