//Import Express and start listening on port 3000
const express = require('express');
const app = express();
const port = 3000;
const horseRouter = require('./routes');

// Middleware to parse JSON requests
app.use(express.json());

// Use the router from horse-routes.js for all horse-related routes
app.use('/horses', horseRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
