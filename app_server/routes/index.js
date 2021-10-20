const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locationsController');
const ctrlOthers = require('../controllers/othersController');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocation.locationInfo);
router.get('/location/review/new', ctrlLocation.addReview);

/* Other page */
router.get('/about', ctrlOthers.about);

module.exports = router;
