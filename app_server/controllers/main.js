/* Get homepage */
const index = (req, res) => {
        res.render('index', { title: 'Express++', name: "Nélima BADJENE"});
}

module.exports = {
        index
}