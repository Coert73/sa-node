const express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Health check
router.get('/', async (req,res) => {
    res.send('Server is running');
});

//Get all appointments.
router.get('/appointments', async (req,res) => {
    const allUsers = await prisma.profile.findMany();
    res.send(allUsers);
});

//Create new appointment.
router.post('/appointments/create', async (req,res) => {
    await prisma.profile.create({
        data: {
          email: 'test',
          firstName: 'Test1',
          lastName: 'test2',
          appointmentDate: new Date(Date.now()).toISOString()
        },
      })
      res.send('Created');
});

module.exports = router;