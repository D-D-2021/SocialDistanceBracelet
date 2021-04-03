const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/userRoutes');
const braceletRoute = require('./routes/braceletRoutes');
const positionRoute = require('./routes/positionRoutes');

const app = express();

app.use(cors());

app.use('/user', userRoute);
app.use('/bracelet', braceletRoute);
app.use('/position', positionRoute);

module.exports = app;
