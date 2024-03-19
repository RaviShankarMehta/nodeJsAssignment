
const mongoose = require('mongoose');

// Define the schema for the patient
const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    medicalIssue: {
        type: String,
        required: true
    },
    pastTreatmentHistory: {
        type: String
    },
    state: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
});

// Create a model based on the schema
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
