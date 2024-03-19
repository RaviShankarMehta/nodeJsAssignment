
const Patient = require("../models/registerPaitent");
module.exports.registerPatient = async (req, res) => {
  try {
    const {
      name,
      age,
      medicalIssue,
      pastTreatmentHistory,
      state,
      phone,
      email,
    } = req.body;

    // Calculate discount based on the state
    let discount = 0;
    if (
      state.toLowerCase() === "maharashtra" ||
      state.toLowerCase() === "rajasthan"
    ) {
      discount = 0.5;
    } else if (
      state.toLowerCase() === "karnataka" ||
      state.toLowerCase() === "tamil nadu" ||
      state.toLowerCase() === "kerala"
    ) {
      discount = 0.6;
    } else {
      discount = 0.4;
    }

    // Create a new patient instance
    const newPatient = new Patient({
      name,
      age,
      medicalIssue,
      pastTreatmentHistory,
      state,
      phone,
      email,
      discount,
    });

    // Save the patient to the database
    const savedPatient = await newPatient.save();

    res.status(201).json(savedPatient);
  } catch (error) {
    console.error("Error registering patient:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
