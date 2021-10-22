const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locationsController');
const ctrlOthers = require('../controllers/othersController');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other page */
router.get('/about', ctrlOthers.about);

module.exports = router;
