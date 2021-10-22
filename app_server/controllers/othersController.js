/* Get homepage */
const about = (req, res) => {
        res.render('index', { title: 'Express++', name: "About"});
}

module.exports = {
        about
}

