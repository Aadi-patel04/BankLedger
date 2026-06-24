
const accountModel = require("../models/account.model");


/* create a new transaction----->
The 10 steps to create a new transaction are as follows:
1. Validate the request body to ensure that all required fields are present (fromAccount, toAccount, amount, idempotencyKey).
2.validate idempotency key to ensure that it is unique and has not been used before.
3.check account status to ensure that both the fromAccount and toAccount are active and not frozen or closed.
4.Derive sender balance from the ldeger to ensure that the fromAccount has sufficient funds to cover the transaction amount.
5.Create transaction(pending)
6.Create debit ledger entry 
7.Create credit ledger entry
8.Mark transaction as completed
9.Commit mongoDb session
10.Send email notification
*/

async function createTransaction(req, res) {
    
    // 1.  Validate request body
    const{fromAccount, toAccount, amount, idempotencyKey} = req.body;

    if(!fromAccount || !toAccount || !amount || !idempotencyKey){
        return res.status(400).json({
            message: "Missing required fields for transaction like fromAccount, toAccount, amount, idempotencyKey",
            status: "failed"
        })
    } 

    const fromAccountData = await accountModel.findOne({
        _id: fromAccount
    });

    const toAccountData = await accountModel.findOne({
        _id: toAccount
    }); 


    if(!fromAccountData || !toAccountData){
        return res.status(404).json({
            message: "Invalid From account or toaccount not found",
            status: "failed"
        })
    }

    // 2. validate idempotency key to ensure that it is unique and has not been used before.
}