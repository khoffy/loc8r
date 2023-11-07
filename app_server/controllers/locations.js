const homelist = (req, res) => {
    res.render('locations-list', {
        title: 'Loc8r - Find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: ' - Find places to work with wifi near you!'
        },
        sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. ' +  
            'Perhaps with coffee, acke or a pint? Let Loc8r help you find the place you\'re looking for.',
        locations: [
            {
                name: 'Starcups',
                address: '1000 North 4th Street',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '175m'
            },
            {
                name: 'Caffe Hero',
                address: '406 N D Street',
                rating: 2,
                facilities: ['Food', 'Premium wifi'],
                distance: '200m'
            },
            {
                name: 'Paradiso',
                address: '304 North Carpenter Ave',
                rating: 3,
                facilities: ['Food', 'Netflix', 'Premium wifi'],
                distance: '250m'
            }
        ]
    })
}

const locationInfo = (req, res) => {
    res.render('location-info', {title: 'Location Info'})
}

const addReview = (req, res) => {
    res.render('location-review-form', {title: 'Add review'})
}

module.exports = {
    homelist,
    locationInfo,
    addReview
}

