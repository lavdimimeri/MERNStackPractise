require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, (error)=> {
    if(error) console.error(error);
    else console.log("Connected to a local MONGODB instance");

     mongoose.connection.collection('startup_log').findOne();
});

