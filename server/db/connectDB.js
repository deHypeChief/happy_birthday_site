const mongoose = require('mongoose')

const connectToMongoDB = (db_URL) => {
    mongoose.connect(db_URL);

    const db = mongoose.connection;

    db.on('error', (error) => {
        console.error('MongoDB connection error:', error);
        setTimeout(connectToMongoDB, 10000);
    });

    db.once('open', () => {
        console.log('Connected to MongoDB!');
    });
};

module.exports = connectToMongoDB
