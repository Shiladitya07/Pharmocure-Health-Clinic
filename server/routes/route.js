const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/bookappointment', async (req, res) => {
    try{
        const appoinment = await new Appointment({
            drid: req.body.drid,
            drname: req.body.drname,
            drspecialization: req.body.drspecialization,
            drlocation: req.body.drlocation,
            drgender: req.body.drgender,
            dravailable: req.body.dravailable,
            pname: req.body.pname,
            adate: req.body.adate,
            atime: req.body.atime,
            reason: req.body.reason
        });
        await appoinment.save();
        res.status(201).json("Appointment booked successfully");
    }catch(error){
        console.log("Error while booking appointment", error);
    }
});

module.exports = router;