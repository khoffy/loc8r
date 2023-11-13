require('../models/db')
const mongoose = require('mongoose');
const Loc = mongoose.model('Location')

const locationsListByDistance = async (req, res) => {
    // Gets coordinates from the query string and convert 
    // from string to numbers
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);
    const near = {
        type: "Point",
        coordinates: [lng, lat]
    };

    // Creates geoJSON point
    const geoOptions = {
        distanceField: "distance.calculated",
        //spherica: true here because it causes MongoDB to use $nearSphere
        // semantics, which calculates distances using spherical geometry.
        // if this were false, it would use 2D geometry
        spherical: true,
        maxDistance: 20000,
        $limit: 10
    };

    try {
        // The aggregate
        const results = await Loc.aggregate([
            {
                $geoNear: {
                    near,
                    ...geoOptions   // The spread operator
                }
            }
        ]);
        const locations = results.map(result => {
            console.log(result);
            return {
                id: result._id,
                name: result.name,
                address: result.address,
                rating: result.rating,
                facilities: result.facilities,
                distance: `${result.distance.calculated.toFixed()}m`
            }
        });
        return res
                .status(200)
                .json(locations);
    } catch (err) {
        console.log(err);
    }
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

