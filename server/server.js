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
const menuRoutes = require('./api/menu');
//const couponRoutes = require('./api/coupon');
//const heroRoutes = require('./api/hero');
//const trendRoutes = require('./api/trend');

app.use('/api/item', itemRoutes);
app.use('/api/menu', menuRoutes);
//app.use('/api/coupon', couponRoutes);
//app.use('/api/hero', couponRoutes);
//app.use('/api/trend', trendRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Hello wolrd </h1>');
});

//Coupon
app.get('/api/coupons', (req, res) => {
  res.send('Coupon');
});

//hero item
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
