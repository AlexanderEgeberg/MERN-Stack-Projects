var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a VoyageSchema
var VoyageSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  vessel_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  description: {
    type: String,
  },
  image: {
      type: String,
      required: true
  }
});

// Create model from the schema
var Voyage = mongoose.model("Voyage", VoyageSchema);

// Export model
module.exports = Voyage;