const router = require('express').Router();
let Complaint = require('../models/complaint.model');

router.route('/').get((req, res) => {
  Complaint.find()
    .then(complaints => res.json(complaints))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const  lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address;
    const vehicleNumber = req.body.vehicleNumber;
    const vehicleDescription = req.body.vehicleDescription;
  
    const newComplaint = new Complaint({
      firstName,
      lastName,
      email,
      phone,
      address,
      vehicleNumber,
      vehicleDescription,
    });
  
  newComplaint.save()
  .then(() => res.status(200).json('Complaint added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Complaint.findById(req.params.id)
      .then(complaint => res.json(complaint))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Complaint.findByIdAndDelete(req.params.id)
      .then(() => res.json('Complaint deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  



module.exports = router;