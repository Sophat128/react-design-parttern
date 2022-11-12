const express = require("express");
const app = express();

app.use(express.json());

let currentUser = {
  name: "Thery",
  age: 20,
  hairColor: "brown",
  hobbies: ["Swimming", "Teaching", "Listening to musics"],
};

let users = [
  {
    name: "Sophat",
    age: 22,
    hairColor: "brown",
    hobbies: ["Swimming", "Bicycling", "Video game"],
  },
  {
    name: "Bopha",
    age: 25,
    hairColor: "black",
    hobbies: ["golfing", "cooking"],
  },
  {
    name: "David",
    age: 20,
    hairColor: "brown",
    hobbies: ["Singing", "Video game"],
  },
];
let products = [
  {
    name: "Flate TV",
    price: "$300",
    description: "Huge screen with great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like a pro use",
    rating: 3.5,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-art",
    rating: 4.2,
  },
];

app.get("/current-user", (req, res) => {
  res.json(currentUser);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json(users.find((user) => user.id === id));
});

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;
  users = users.map((user) =>
    user.id === id ? updatedUser : "This user doesn't exist"
  );
  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  res.json(products.find((product) => product.id === id));
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
