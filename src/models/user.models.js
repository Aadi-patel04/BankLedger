const mongoose = require('mongoose');

const user = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is needed"],
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"],
        unique:[true, "Email already exists"]
    },
    name: {
        type: String,
        required: [true, "Name is needed for creating an account"],
        trim: true
    },
    password:{
        type: String,
        required: [true, "Password is needed for creating an account"],
        trim: true,
        minlength: [6, "Password must be at least 6 characters long"],
        select: false
    }
},{
    timestamps:true
});

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        return next();
    }

module.exports = mongoose.model("User", user);