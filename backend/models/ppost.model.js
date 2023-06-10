const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ppostsSchema = new Schema({
    content: { type: String, required:   true },
    mood: { type: String, required: true },
    by: {type: String, required: true}
}, 
    {
    timestamps: true,
});

const Pposts = mongoose.model('Ppost', ppostsSchema);

module.exports = Pposts;