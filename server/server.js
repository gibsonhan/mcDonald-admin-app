require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const Entry = require('./models/item');

app.use(cors());
app.use(bodyParser.json());


//Routes
const itemRoutes = require('./api/item');

app.use('/api/item', itemRoutes)

app.get('/', (req, res) => {
  res.send('<h1>Hello wolrd </h1>');
});


//Coupon
app.get('/api/coupons', (req, res) => {
  res.send('Coupon')
})

//menu item
app.get('/api/items', (req, res) => {
  Entry.find({}).then((entries) => {
    res.json(entries.map((entry) => entry.toJSON()));
  });
});
//const requestLogger = require('./middleware/requestLogger')
//app.use(requestLogger)
//app.use(unknownEndpoint)


//app.use(errorHandler)
//app.use(unknowEndpoint)

const PORT = process.env.PORT;
app.listen(PORT);
console.log(`Server running on PORT ${PORT}`);
