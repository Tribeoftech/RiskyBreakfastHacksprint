const express = require('express');
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

const app = express();
const PORT = 3000;

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI_zryNHSv777FF8gqIaf9p8yv21RQTLo",
  authDomain: "risky-breakfast-f2f35.firebaseapp.com",
  projectId: "risky-breakfast-f2f35",
  storageBucket: "risky-breakfast-f2f35.appspot.com",
  messagingSenderId: "542307173680",
  appId: "1:542307173680:web:8b90eaf7dbd1e8ed3c74f5",
  measurementId: "G-XXYWSDT91T"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Route handler for a second route
app.get('/food1', (req, res) => {
  res.send('This is the Food 1 page.');
});

// Route handler for a third route
app.get('/food2', (req, res) => {
  res.send('This is the Food 2 page.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
