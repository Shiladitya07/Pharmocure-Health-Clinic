const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');


router.post('/bookappointment', async (req, res) => {
  try{
    const appoinment = new Appointment({
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
    res.status(500).json({ error: "Error while booking appointment" });
  }
});

// module.exports = router;

const multer = require("multer");
const Product = require("../models/Product");

// Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

//Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new product (with image)
router.post("/products", upload.single("img"), async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      price: req.body.price,
      discount: req.body.discount,
      img: req.file ? `/uploads/${req.file.filename}` : "",
      label: req.body.label,
      category: [req.body.category] //  Ensure array
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
