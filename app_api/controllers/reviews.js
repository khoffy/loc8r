require('../models/db')
const { error } = require('jquery');
const mongoose = require('mongoose');
const Loc = mongoose.model('Location')

const reviewsCreate = (req, res) => {
    res
        .status(200)
        .json({"content": "Success - reviewsCreate"});
}

const reviewsReadOne = (req, res) => { 
    Loc
        .findById(req.params.locationId)
        .select('name reviews')
        .then((location) => {
            if(!location) {
                return res
                    .status(404)
                    .json({"message": "location not found!"})
            } else if(error) {
                return res
                    .status(400)
                    .json(err);
            }

            if(location.reviews && location.reviews.length > 0) {

                const review = location.reviews.id(req.params.reviewId);

                if(!review) {
                    return res
                        .status(404)
                        .json({"message": "review not found!"});
                } else {
                    const response = {
                        location: {
                            name: location.name,
                            id: req.params.locationId
                        },
                        review
                    };
                    return res
                        .status(200)
                        .json(response)
                }
            } else {
                return res
                    .status(404)
                    .json({
                        "message": "No review found!"
                    });
            }
        });
};

const reviewsUpdateOne = (req, res) => {
    res
        .status(200)
        .json({"content": "Success - reviewsUpdateOne"});
}

const reviewsDeleteOne = (req, res) => {
    res
        .status(200)
        .json({"content": "Success - reviewsDeleteOne"});
}

module.exports = {
    reviewsCreate,
    reviewsReadOne,
    reviewsUpdateOne,
    reviewsDeleteOne
}

