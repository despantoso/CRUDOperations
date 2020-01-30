
//Variable mongoose that will be used to connect to MongoDB 
//Schema variable that is created to take into account the schema
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

//Creation of the schema
var athletesSchema = new Schema ({

    name: String,
    salary: String,
    sport: String

});

//Function to save the created at and/or updated at to the athlete in the database
athletesSchema.pre('save', function(next){
    var currentDate = new Date();
    this.updated_at = currentDate;

    if(!this.created_at){
        this.created_at = currentDate;
    }
    next();
});

//Instantiation of Mongooose model
var Athletes = mongoose.model('Athletes', athletesSchema);

module.exorts = Athletes;