const mongoose = require("mongoose");
//Import mongoose-unique-validator
const uniqueValidator = require("mongoose-unique-validator");

//Create schema for user
const adminSchema = mongoose.Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    firstname:{type:String, required:true},
    lastname:{type:String, required:true},
    title:{type:String, required:true},
    department:{type:String, required:true},
    company:{type:String, required:true}
});

//Attach unique attribute to the userSchema
adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Admin",adminSchema);