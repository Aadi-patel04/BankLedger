const {Router} = require('express');

const authMiddleware = require('../middlewares/auth.middleware');

const transactionRouter = Router();

    // Handle transaction creation logic here
transactionRouter.post("/", authMiddleware.authMiddleware)


module.exports = transactionRouter;