const express = require("express");
const app = express();
const cors =require("cors");
const User = require("./databse");
const port = 3000;

app.use(express.json());
app.use(cors());

// home route
app.get("/", (req, res) => {
  res.send("server set up");
});

// create route

app.post("/post", async (req, res) => {
  try {
    console.log(req.body);
    const data = new User(req.body);
    const save = await data.save();
    res.send(save);
  } catch (error) {
    console.log(error);
  }
});

// read data route

app.get("/get", async (req, res) => {
  try {
    const finddata = await User.find({});
    console.log(finddata);
    res.send(finddata);
  } catch (error) {
    console.log(error);
  }
});

// update route

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const update = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(update);
  } catch (error) {
    console.log(error);
  }
});

// delete route

app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedata = await User.findByIdAndDelete(req.params.id);
    res.send(deletedata);
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`server runing on ${port}`);
});
