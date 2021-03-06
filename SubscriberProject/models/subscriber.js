const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    //One to many, this should be many to many
    subscribedChannel: {
        type: Schema.Types.ObjectId,
        ref: "Channel"
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)