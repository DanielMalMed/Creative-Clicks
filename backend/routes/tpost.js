//require express and the model/schema
const router = require('express').Router();
let Tposts = require('../models/tposts.model');

//GET route
router.route('/').get((req, res) => {
    Tposts.find()
        .then(tposts => res.json(tposts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//GET by ID
router.route('/:id').get((req, res) => {
    Tposts.findById(req.params.id)
        .then(tposts => res.json(tposts))
        .catch(err => res.status(400).json('Error: ' + err));
})


//delete Tposts by ID
router.route('/:id').delete((req, res) => {
    Tposts.findByIdAndDelete(req.params.id)
    .then(() => res.json('Tpost.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//POST route
router.route('/add').post((req, res) => {
    const content = req.body.content;
    const mood = req.body.mood;

    const newTposts = new Tposts({ content, mood });

    newTposts.save()
        .then(() => res.json('Tpost added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;