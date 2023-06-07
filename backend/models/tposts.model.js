const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tpostsSchema = new Schema({
    content: { type: String, required: true },
    mood: { type: String, required: true },
    user_id: {type: String, required: true}
}, 
    {
    timestamps: true,
});

const Tposts = mongoose.model('Tpost', tpostsSchema);

module.exports = Tposts;