const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

module.exports = mongoose.model("Posts", PostSchema);
