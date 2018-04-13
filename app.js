const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://mLabMongoDBdb:mLabMongoDBdb@ds143039.mlab.com:43039/note-taker';
let port = 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// connect with mongoose
mongoose.connect(url)
    .then(() => console.log(('Database connection established!')))
    .catch(err => {
        console.log('Error ' + err);
        process.exit();
    });


app.get('/', (req, res) => res.send('Welcome to Book Store'));


// Require books routes
require('./books')(app);

app.listen(port, () => console.log('Server running on port ' + port));
