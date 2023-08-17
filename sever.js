const express = require('express');
const app = express();
const PORT = 3000;

// Route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route handler for a second route
app.get('/food1', (req, res) => {
  res.send('This is the About page.');
});

// Route handler for a third route
app.get('/food2', (req, res) => {
  res.send('This is the Contact page.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
