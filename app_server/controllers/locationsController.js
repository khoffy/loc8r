/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { 
        title: 'Loc8r - trouvez des endroits pour travailler avec le wifi près de chez vous !',
        pageHeader : {
            title: 'Loc8r',
            strapline: 'Trouvez des endroits pour travailler avec le wifi près de chez vous !'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, 
        {
            name: 'Cafe Hero',
            address: 'Rue des Goyaviers, ZZ6 3XA',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wif'],
            distance: '200m'
        },
        {
            name: 'Burger Queen',
            address: 'Rue des Briquetiers, RA9 3TZ',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page*/
const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info'});
};

/* GET 'Add review' page */
const addReview = (req, res) => {
    res.render('location-review-form', { title: "Add review"});
};



module.exports = {
    homelist,
    locationInfo,
    addReview
}