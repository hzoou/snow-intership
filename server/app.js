const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3030;

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Listening on port ${port}...`));