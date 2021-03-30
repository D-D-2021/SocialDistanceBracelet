const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cron = require('node-cron');

const userRoute = require('./routes/userRoutes');
const braceletRoute = require('./routes/braceletRoutes');
const positionRoute = require('./routes/positionRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log('Successfully connected to database');
    } catch (err) {
        console.error('Failed to connect to database');
    }
};

connectDB();

app.use(cors());

app.use('/user', userRoute);
app.use('/bracelet', braceletRoute);
app.use('/position', positionRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

cron.schedule('* * * * *', () => {
    // Will be used to determine positions
});
