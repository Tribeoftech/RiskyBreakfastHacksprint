const express = require('express');
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

const app = express();
const PORT = 3000;

// Your Firebase configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgul610ygce5HUmQiwD5HhVt1heOY5H2I",
  authDomain: "riskybreakfast-bd4b3.firebaseapp.com",
  projectId: "riskybreakfast-bd4b3",
  storageBucket: "riskybreakfast-bd4b3.appspot.com",
  messagingSenderId: "744181553247",
  appId: "1:744181553247:web:a02969ca3e1567b635a3ea",
  measurementId: "G-W1GB9L3D42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
