const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 20 },
  { id: 3, name: "Susan", age: 25 },
];

app.use((req, res, next) => {
  req.get("token") ? next() : res.status(401).json({ message: "Unauthorized" });
});

app.get("/", function (req, res) {
  res.json(users);
});

app.get("/user/:id", function (req, res) {
  const user = users.find((user) => user.id.toString() === req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.post("/", function (req, res) {
  res.status(201).json(req.body);
});

app.put("/user", function (req, res) {
  const user = users.find((user) => user.id.toString() === req.query.id);
  if (user) {
    if (req.query.name === user.name) {
      res.status(400).json({ message: "Same Name" });
    } else {
      user.name = req.query.name;
      res.status(200).json({ message: "Name Changed" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.delete("/user/:id", function (req, res) {
  const user = users.find((user) => user.id.toString() === req.params.id);
  if (user) {
    users = users.filter((user) => user.id.toString() !== req.params.id);
    res.status(200).json({ message: "User Deleted" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(3000);
