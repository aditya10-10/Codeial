//  require express
const express = require('express');
const port = 3000;
const app = express();
exports.app = app;
const path = require('path');

// use express router $router
const db = require("./config/mongoose");
app.use('/', require('./routes'));
app.use('./assets', express.static('assets'));

app.use('./views', express.static('views'));
// setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// listening on http://localhost:3000 
app.listen(port, function(err){
  if(err){
    console.log(`Error in running the server: ${err}`);
  }
  else{
    console.log(`Server is running on port: ${port}`);
  }
})