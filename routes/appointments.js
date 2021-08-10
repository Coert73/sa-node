const express = require("express");
const router = express.Router();

// Health check
router.get('/', async (req,res) => {
    res.send('Server is running');
});

//Get all appointments.
router.get('/appointments', async (req,res) => {
});

module.exports = router;