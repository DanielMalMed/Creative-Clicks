const requireAuth = require('../middleware/requireAuth');
//require express and the model/schema
const router = require('express').Router();

let Pposts = require('../models/ppost.model');

//GET route
router.route('/').get((req, res) => {
    Pposts.find()
        .then(pposts => res.json(pposts))
        .catch(err => res.status(400).json('Error: ' + err));
});

//GET by ID
router.route('/:id').get((req, res) => {
    Pposts.findById(req.params.id)
        .then(pposts => res.json(pposts))
        .catch(err => res.status(400).json('Error: ' + err));
})


//delete Pposts by ID
router.route('/:id').delete((req, res) => {
    Pposts.findByIdAndDelete(req.params.id)
    .then(() => res.json('Ppost.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//POST route
router.route('/add').post((req, res) => {
    const content = req.body.content;
    const mood = req.body.mood;
    const user_id = req.user._id;
    const email = req.body.email;

    const newPposts = new Pposts({ content, mood, user_id, email});

    newPposts.save()
        .then(() => res.json('Ppost added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;