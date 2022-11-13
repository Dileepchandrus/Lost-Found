const router = require('express').Router();
let Vehicle = require('../models/vehicle.model');
const Vehicle = require('../models/vehicle.model');

router.route('/').get((req, res) => {
  Vehicle.find()
    .then(vehicles => res.json(vehicles))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const vehiclenumber = req.body.vehiclenumber;

  const newVehicle = new Vehicle({vehiclenumber});

  newVehicle.save()
    .then(() => res.json('Vehicle added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;