const mongoose = require("mongoose");

const connectionURL = "";

async function connect(){
    await mongoose.connect(connectionURL);
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 50
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 50
    },
    password : {
        type : String,
        required : true,
        minLength : 6
    },
    userName : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minLength : 3,
        maxLength : 30
    }
});

const User = mongoose.model("User",userSchema);

module.exports ={
    User
};