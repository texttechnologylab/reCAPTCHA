console.log('Server-side code running');
const express = require('express');
const app = express();

//var tools = require("./helper.js");


// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(808, () => {
    console.log('listening on 808');
  //  tools.addButton("text");
});


// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})