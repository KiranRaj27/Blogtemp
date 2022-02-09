const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const PostSchema = require("./models/postmodel");
const cors = require("cors");
// const { json } = require("body-parser");
// const { countDocuments } = require("./models/PostSchema");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://Kiranraj27:Kiranraj27@cluster0.jxl11.mongodb.net/mernblog?retryWrites=true&w=majority"
  )
  .then(console.log("Connect to mongdb"))
  .catch((err) => console.log(err));

//   VIEW ALL API
app.get("/api/view", async (req, res) => {
  try {
    const post = await PostSchema.find();
    res.send(post);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get("/api/view/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await PostSchema.findOne({ _id: id });
    res.send(post);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// WRITE API
app.post("/api/write", async (req, res) => {
  try {
    const newPost = new PostSchema({
      title: req.body.title,
      desc: req.body.desc,
    });

    const post = await newPost.save();

    res.send(post);
  } catch (error) {
    console.log("error");
  }
});

// DELETE API
app.post("/api/post/delete/:name", async (req, res) => {
  try {
    const title = req.params.name;
    const deletedPost = await PostSchema.deleteOne({ _id: title });
    // const updatedPost = await PostSchema.deleteOne({ title: title });
    res.send(deletedPost);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// UPDATE API
app.post("/api/post/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPost = await PostSchema.updateOne(
      { _id: id },
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
        },
      }
    );
    res.send(updatedPost);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.listen(4000, () => {
  console.log("server is running at port 4000");
});
