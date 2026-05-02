const userModel = require('../models/user.models');
const jwt = require('jsonwebtoken');

const emailService = require('../services/email.service');
/*
user register controller 
POST /api/auth/register
*/

async function userRegisterController(req, res) {

    const { name, email, password } = req.body;

    const isExists = await userModel.findOne({
        email: email
    })


    //  Validation
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required",
            status: "failed"
        });
    }

    if (isExists) {
        return res.status(400).json({
            message: "User already exists",
            status: "failed"
        })
    }

    const user = await userModel.create({
        name: name,
        email: email,
        password: password
    })

    const token = jwt.sign({
        userId: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {
        expiresIn: "3d"
    })


    res.cookie("token", token)

     res.status(201).json({
        user: {
            _id: user._id,
            name: user.name,
            email: user.email
        },
        token: token,
        message: "User registered successfully",
        status: "success"
    })

    await emailService.sendRegistrationEmail(user.email, user.name);
}

/*
user login controller 
POST /api/auth/login
*/

const userLoginController = async (req, res) => {

    const { email, password } = req.body; 

    const user = await userModel.findOne({ email}).select("+password");

        if(!user){
            return res.status(401).json({
                message: "Invalid credentials email or password is incorrect",
                status: "failed"
            })
        }

        const isValidPassword = await user.comparePassword(password);

        if(!isValidPassword){   
            return res.status(401).json({
                message: "Invalid credentials email or password is incorrect",
                status: "failed"
            })
        }

    const token = jwt.sign({
        userId: user._id,
        email: user.email
    }, process.env.JWT_SECRET, {
        expiresIn: "3d"
    })

    res.cookie("token", token)

    return res.status(200).json({
        user: {
            _id: user._id,
            name: user.name,
            email: user.email
        },
        token: token,
        message: "User logged in successfully",
        status: "success"
    })
}


module.exports = {
    userRegisterController,
    userLoginController
}
