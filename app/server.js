const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/userRoutes');
const braceletRoute = require('./routes/braceletRoutes');
const positionRoute = require('./routes/positionRoutes');
const locationRoute = require('./routes/locationRoutes');
const podRoute = require('./routes/podRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRoute);
app.use('/bracelet', braceletRoute);
app.use('/position', positionRoute);
app.use('/location', locationRoute);
app.use('/pod', podRoute);

module.exports = app;
