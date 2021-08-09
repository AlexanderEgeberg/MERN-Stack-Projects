const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const channelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subscribers: [{
        type: Schema.Types.ObjectId,
        ref: "Subscriber"
    }],
    creationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Channel', channelSchema)