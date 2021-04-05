const mongoose = require('mongoose');
const cron = require('node-cron');
const calcNewLocations = require('./calcPosition');

const app = require('./server');

require('dotenv').config();

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

cron.schedule('*/15 * * * * *', () => { // Run every 15 seconds
    // Will be used to determine positions
    console.log('Saving locations');
    calcNewLocations();
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
