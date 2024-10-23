const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS)
app.use(express.static('public'));

// Route to handle form submissions
app.post('/submit-message', (req, res) => {
    const message = req.body.message;
    const timestamp = new Date().toLocaleString();

    // Append the message to a file
    const log = `Message: ${message}\nReceived on: ${timestamp}\n\n`;

    fs.appendFile('messages.txt', log, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to save message.' });
        }
        return res.status(200).json({ success: 'Message saved successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
