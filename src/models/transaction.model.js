const  mongoose = require('momgoose');

const transactionSchema = new mongoose.Schema({
  fromAccount: {
    type:mongoose.Schema.Types.ObjectId,
    r6ef:"account",
    required: [true, "From account is required for a transaction"],
    index:true
  },
    toAccount: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: [true, "To account is required for a transaction"],   
        index:true
    },
    status:{
        type: String,
        enum:{
            values:["PENDING", "COMPLETED", "FAILED","REVERSED"],
        },
        Message: "Status must be either pending, completed, failed, or reversed",
        default: "PENDING"
    },
    amount:{
        type: Number,
        required: [true, "Amount is required for a transaction"],
        min: [0.01, "Amount must be at least 0.01"]
    },

    idempotrncyKey:{
        type: String,
        required: [true, "Idempotency key is required for a transaction"],
        unique: true,
        index: true
    },
},{
    timestamps: true
});

const transactionModel = mongoose.model("transaction", transactionSchema);

module.exports = transactionModel;