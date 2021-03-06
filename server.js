function runWebsite() {

    console.log('Server-side code running');
    const express = require('express');
    const app = express();


// Serves files from the resources directory
    app.use("/resources", express.static(__dirname + '/resources'));

// serve the homepage
    app.get('/', (req, res) => {
       res.sendFile(__dirname + '/index.html');
    })

// start the express web server listening on 808
    app.listen(808, () => {
        console.log('listening on 808');
    });

}


runWebsite();

module.exports = {
    runWebsite
};