/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', { 
        title: 'Loc8r - trouvez des endroits pour travailler avec le wifi près de chez vous !',
        pageHeader : {
            title: 'Loc8r',
            strapline: 'Trouvez des endroits pour travailler avec le wifi près de chez vous !'
        },
        sidebar: "À  la recherche d'un wifi et d'une place assise ? Loc8r vous aide à trouver des endroits " + 
        "pour travailler quand vous êtes dehors. Peut-être avec un café, un croissant ou un gateau ?" ,
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
    res.render('location-info', { 
        title: 'Location info',
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            openingHours: ['Lundi - Vendredi: 7h - 19h', 'Samedi: 8h - 17h', 'Dimanche: fermé'],
            distance: '100m'
        },
        comments: [
            {
                author: 'Simon Holmes',
                rating: 4,
                date: '25 October 2021',
                comment: 'Quel agréable endroit!'
            },
            {
                author: 'Charlie Chaplin',
                rating: 3,
                date: '23 October 2021',
                comment: 'C\'était cool. Le café n\'etait pas au top.'
            }
        ]
    });
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