// Import Express and start server on port 3000
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// In-memory array to store racehorses
const raceHorses = [];

// Function to generate a unique ID for new horses
function getNextHorseId() {
  return raceHorses.length ? raceHorses[raceHorses.length - 1].id + 1 : 1;
}

// Add a new racehorse
app.post('/horses', (req, res) => {
  // Request body validation
  const { horseName, jockeyName } = req.body;
  if (!horseName || !jockeyName) {
    return res.status(400).send('Missing required fields: horseName or jockeyName');
  }

  const newHorse = {
    id: getNextHorseId(),
    horseName,
    jockeyName,
  };

  // Add the new racehorse to the array
  raceHorses.push(newHorse);

  // Respond with the created horse object and status code 201 (Created)
  res.status(201).json(newHorse);
});

// Route handler to get all racehorses
app.get('/horses', (req, res) => {
  res.json(raceHorses);
});

// Route handler to get a single racehorse by ID
app.get('/horses/:id', (req, res) => {
  const horseId = parseInt(req.params.id);
  // Get racehorse by id
  const horse = raceHorses.find(horse => horse.id === horseId);

  // Check if horse is found
  if (!horse) {
    return res.status(404).send('Horse not found');
  }

  // Return the found racehorse
  res.json(horse);
});

// Route handler to update a racehorse by ID
app.put('/horses/:id', (req, res) => {
  const horseId = parseInt(req.params.id);
  const { horseName, jockeyName } = req.body;

  // Find racehorse
  const horse = raceHorses.find(horse => horse.id === horseId);

  // Check if horse is found
  if (!horse) {
    return res.status(404).send('Horse not found');
  }

  // Update horse properties with new values if provided in request body
  horse.horseName = horseName || horse.horseName;
  horse.jockeyName = jockeyName || horse.jockeyName;

  // Respond with the updated horse object
  res.json(horse);
});

// Route handler to delete a racehorse by ID
app.delete('/horses/:id', (req, res) => {
  const horseId = parseInt(req.params.id);

  // Find racehorse by ID
  const horseIndex = raceHorses.findIndex(horse => horse.id === horseId);

  // Check if horse is found
  if (horseIndex === -1) {
    return res.status(404).send('Horse not found');
  }

  // Remove the horse from the array
  raceHorses.splice(horseIndex, 1);

  // Respond with no content status
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
