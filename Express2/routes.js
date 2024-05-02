const express = require('express');
const router = express.Router();
const raceHorses = [];

// Function to generate a unique ID for new horses
function getNextHorseId() {
  return raceHorses.length ? raceHorses[raceHorses.length - 1].id + 1 : 1;
}

// Add a new racehorse
router.post('/', (req, res) => {
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

// Get all racehorses
router.get('/', (req, res) => {
  res.json(raceHorses);
});

// Get a single racehorse by ID
router.get('/:id', (req, res) => {
  const horseId = parseInt(req.params.id);
  const horse = raceHorses.find(horse => horse.id === horseId);

  if (!horse) {
    return res.status(404).send('Horse not found');
  }

  res.json(horse);
});

// Update a racehorse by ID
router.put('/:id', (req, res) => {
  const horseId = parseInt(req.params.id);
  const { horseName, jockeyName } = req.body;

  const horse = raceHorses.find(horse => horse.id === horseId);

  if (!horse) {
    return res.status(404).send('Horse not found');
  }

  horse.horseName = horseName || horse.horseName;
  horse.jockeyName = jockeyName || horse.jockeyName;

  res.json(horse);
});

// Delete a racehorse by ID
router.delete('/:id', (req, res) => {
  const horseId = parseInt(req.params.id);
  const horseIndex = raceHorses.findIndex(horse => horse.id === horseId);

  if (horseIndex === -1) {
    return res.status(404).send('Horse not found');
  }

  raceHorses.splice(horseIndex, 1);

  res.status(204).send();
});

module.exports = router;
