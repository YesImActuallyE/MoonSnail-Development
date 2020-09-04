const mongoose = require('mongoose');

module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        };

        mongoose.connect(process.env.MONGODBCONNECT, dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log('Database has successfully connected!');
        });

        mongoose.connection.on('err', err => {
            console.error(`Database connection error: \n${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.warn('Database connection lost');
        });
    }
}