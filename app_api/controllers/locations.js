require('../models/db')
const mongoose = require('mongoose');
const Loc = mongoose.model('Location')

const locationsListByDistance = (req, res) => {
    res
        .status(200)
        .json({ "status": "success - locationsListByDistance" });
}

const locationsCreate = (req, res) => {
    res
        .status(200)
        .json({ "status": "success - locationCreate" });
}

const locationsReadOne = (req, res) => {
    Loc
        .findById(req.params.locationId)
        .then((location) => {
            if (!location) {
                return res
                    .status(404)
                    .json({ "message": "location not found!" })
            } else {
                res
                    .status(200)
                    .json(location);
            }
        }).catch((err) => {
            return res
                .status(404)
                .json(err);

        });
}

const locationsUpdateOne = (req, res) => {
    res
        .status(200)
        .json({ "status": "success - locationsUpdateOne" });
}

const locationsDeleteOne = (req, res) => {
    res
        .status(200)
        .json({ "status": "success - locationsDeleteOne" });
}

module.exports = {
    locationsListByDistance,
    locationsCreate,
    locationsReadOne,
    locationsUpdateOne,
    locationsDeleteOne
}

