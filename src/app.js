const express = require('express');

const cookieParser = require('cookie-parser');

/*
Routes requires for the application
1. Auth routes
2. Account routes
*/

const authRouter = require('./routes/auth.routes');

const accountRouter = require('./routes/account.routes');

const app = express();

app.use(cookieParser());

app.use(express.json());

/* Routes used in the application */

app.use('/api/auth',authRouter);

app.use('/api/accounts', accountRouter);



module.exports = app;