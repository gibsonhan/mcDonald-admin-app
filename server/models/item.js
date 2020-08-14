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

const itemSchema = new mongoose.Schema({
  itemName: String,
  menuGroup: String,
  subMenu: String,
  servingTime: Array,

  price: Object,
  //mealPrice: Number,
  //couponGroup: String,

  //calories: Number,

  sizes: Object,
  //defaultSize: String,

  //customize: Object,
  /*
  info: {
    ingredients: Object,
    Nutriention: Object,
  },
  dateCreate: Date,
  lastEdit: {
    dateEdit: Date,
    author: String,
  },
  */
});

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Item', itemSchema);
