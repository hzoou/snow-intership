const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const sequelize = require('./models').sequelize;
const port = 3030;

const apiRouter = require('./router');
const { corsConfig } = require('./config');

sequelize.sync();

app.use(cors(corsConfig));
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);
app.listen(port, () => console.log(`Listening on port ${port}...`));