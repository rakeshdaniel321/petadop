const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const upload = require('../middleware/upload');

// GET all pets
router.get('/', async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

// GET single pet
router.get('/:id', async (req, res) => {
  const pet = await Pet.findById(req.params.id);
  res.json(pet);
});

// POST add pet
router.post('/', upload.single('image'), async (req, res) => {
  const { name, breed, age, description } = req.body;
  const image = req.file.filename;

  const newPet = new Pet({ name, breed, age, description, image });
  await newPet.save();
  res.json(newPet);
});

// DELETE pet
router.delete('/:id', async (req, res) => {
  await Pet.findByIdAndDelete(req.params.id);
  res.json({ message: 'Pet deleted' });
});

module.exports = router;