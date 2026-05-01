const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is needed"],
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email"],
        unique: [true, "Email already exists"]
    },
    name: {
        type: String,
        required: [true, "Name is needed for creating an account"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is needed"],
        trim: true,
        minlength: [6, "Password must be at least 6 characters long"],
        select: false
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
});


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;