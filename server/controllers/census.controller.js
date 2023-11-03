const db = require('../models/census.model'); 
const Census = require('../models/census.model');

// Create a new census entry
const createCensusEntry = async (req, res) => {

    console.log(req.body);
    const newEntry = {
      name: req.body.name,
      gender: req.body.gender,
      birthDate: req.body.birthDate,
      vaccinated: req.body.vaccinated,
    };

  await Census.create(newEntry)
  .then((newCensusEntry) => {
    console.log('Data inserted successfully:', newCensusEntry.get());
    res.status(201).json({success : "Data Inserted Successfully"});
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  })

};

// Retrieve all census entries
const getAllCensusEntries = async (req, res) => {
  try {
    const censusEntries = await Census.findAll();// Use 'findAll' instead of 'find'
    return res.status(200).json(censusEntries);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Unable to retrieve census entries' });
  }
};

// Retrieve a specific census entry by ID
const getCensusEntryById = async (req, res) => {
  const { id } = req.params;
  try {
    // Retrieve a specific census entry from the database using your model
    const censusEntry = await db.Census.findByPk(id);
    if (censusEntry) {
      res.status(200).json(censusEntry);
    } else {
      res.status(404).json({ error: 'Census entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve census entry' });
  }
};

module.exports = {
  createCensusEntry,
  getAllCensusEntries,
  getCensusEntryById
};