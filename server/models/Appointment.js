const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    drid: {
        type: Number,
        required: true
    },
    drname: {
        type: String,
        required: true
    },
    drspecialization: {
        type: String,
        required: true
    },
    drlocation : {
        type: String,
        required: true
    },
    drgender : {
        type: String,
        required: true
    },
    dravailable : {
        type: String,
        required: true
    },
    pname : {
        type: String,
        required: true
    },
    adate : {
        type: Date,
        required: true
    },
    atime : {
        type: String,
        required: true
    },
    reason : {
        type: String,
        required: true
    }
});

const Appointment = mongoose.model('appointment', appointmentSchema);

module.exports = Appointment;