var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

var DestinationSchema = new Schema({
        port: String,
        city: String,
        cc: String,
});

// Using Schema constructor, create a VesselSchema
var VesselSchema = new Schema({

    imo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
        },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    destinations: [DestinationSchema]
});

// Create model from the schema
var Vessel = mongoose.model("Vessel", VesselSchema);

// Export model
module.exports = Vessel;
