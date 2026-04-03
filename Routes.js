const express = require('express');
const router = express.Router();
const User = require('../models/user');

// CREATE JOB
router.post('/', async (req, res) => {
  try {
    const { jobid, jobrole, company, experience, location, salary } = req.body;

    // validation
    if (!jobid || !jobrole || !company || !experience || !location || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newJob = new User({
      jobid,
      jobrole,
      company,
      experience,
      location,
      salary,
    });

    await newJob.save();

    res.status(201).json(newJob);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// GET ALL JOBS
router.get('/', async (req, res) => {
  try {
    const jobs = await User.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
