// ---------- Set - Up ----------
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
require('./backend/routes')(app);

// ---------- Server ----------
app.listen(8000, function(){
    console.log('localhost:8000')
})
