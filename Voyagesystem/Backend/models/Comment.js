var mongoose = require("mongoose");

// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a CommentSchema
var CommentSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  creationDate: {
      type: Date,
      required: true,
      default: Date.now
  }
});

// Create model from the schema
var Comment = mongoose.model("Comment", CommentSchema);

// Export model
module.exports = Comment;