const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const flaskApp = require('./flask_app'); // Import the Flask app

const app = express();
const PORT = 80;

app.use(cors());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Use Flask app for file uploads
app.post('/upload', flaskApp.upload);

// Catch-all handler for any requests that don't match the above
app.get('*', function(req, res) {
    res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});