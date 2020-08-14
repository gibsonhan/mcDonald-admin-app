const mongoose = require("mongoose");
//mongoose.set('useFindAndMondify', false)
const url = process.env.MONGODB_URI;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log(" connected to MONGOD DB!");
  })
  .catch((error) => {
    console.log("error connecting to MONGOD DB", error.message);
  });

const itemSchema = new mongoose.Schema({
  collection: String,
  name: String,
  group: String,
  subGroup: String,
  couponGroup: String,
  servingTime: Array,
  sizes: Object,
  //customize: Object,
  /*
  info: {
    ingredients: Object,
    nutriention: Object,
  },
  */
  created: Date,
  lastEdit: {
    date: Date,
    author: String,
  },
});

itemSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Item", itemSchema);
