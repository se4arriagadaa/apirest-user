const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const ejs = require('ejs');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

// ejs
app.set('view engine', '.ejs');

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ extended: true}));

// routes
app.use('/api',require('./routes/app'));

// public 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('listening on port: ', app.get('port'))
});