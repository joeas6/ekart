const mongoose = require('mongoose');

var dbHost = "mongodb://localhost:27017/ekart";

mongoose.connect(dbHost, (err) => {
    if (err) {
        console.log('Error while connecting the database :' + JSON.stringify(err, undefined, 2));
    } else {
        console.log('Connection succeeded !!');
    }
});

module.exports = mongoose;