const mongoose = require('mongoose');
const { captureRejectionSymbol } = require('nodemailer/lib/xoauth2');

const accountSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: [true, "Account must belong to a user"]
    },

    status: {
        enum:{
            values: ["ACTIVE", "FROZEN", "INACTIVE"],
            message: "Status must be either active, frozen, or inactive"
        },
        type: String,
        default: "ACTIVE"
        },

        currency:{

            type: String,
            required: [true, "Currency is required for creating an account"],
            default: "INR"
        },
    },
        {timestamps: true 

        })

        accountSchema.index({user:1, status:1});
        
        const accountModel = mongoose.model("account", accountSchema);  

        module.exports = accountModel;