'use strict';

//Importing modules, files, and exports
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Athletes = require('./athletesSchema'),
    config = require('./config');

//Connecting to MongoDB through Mongoose
mongoose.connect(config.db.uri, {useNewUrlParser: true});

//Instantiating fs to read the file and parse the JSON data
//to the database
fs.readFile('athletes.json', 'utf8', function(err, data){
    //Error check
    if(err){
        throw err
    }
    else{
        //Parse the data and for each element, create it in the DB
        JSON.parse(data).array.forEach(element =>{
            Athletes.create(element)
        });
    }
})

