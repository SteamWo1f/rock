const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 80;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Catch-all handler for any requests that don't match the above
app.get('*', function(req, res) {
    res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});