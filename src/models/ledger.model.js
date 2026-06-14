const mongoose = require('mongoose');
const accountModel = require('./account.model');

const ledgerSchema = new mongoose.Schema({

    account:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'account',
        required: [true, "Ledger entry must be associated with an account"],
        index: true,
        immutable: true
    },

    amount:{
        type: Number,
        required: [true, "Amount is required for a ledger entry"],
        immutable
     },

     transaction:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'transaction',
        required: [true, "Ledger entry must be associated with a transaction"],
        index: true,
        immutable: true
     },

     type:{
        type: String,
        enum:{
            values: ["DEBIT", "CREDIT"],
            message: "Type must be either debit or credit"
        },
        required: [true, "Type is required for a ledger entry"],
        immutable: true
     }

})

function preventledgerModification(){

    throw new Error("Ledger entries cannot be modified or deleted");
}

ledgerSchema.pre('findOneAndUpdate', preventledgerModification);
ledgerSchema.pre('remove', preventledgerModification);  
ledgerSchema.pre('deleteOne', preventledgerModification);
ledgerSchema.pre('updateOne', preventledgerModification);
ledgerSchema.pre('deleteMany', preventledgerModification);
ledgerSchema.pre('updateMany', preventledgerModification);
ledgerSchema.pre('findOneAndDelete', preventledgerModification);
ledgerSchema.pre('findOneAndReplace', preventledgerModification);


const ledgerModel = mongoose.model("ledger", ledgerSchema);

module.exports = ledgerModel;