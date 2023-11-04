const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({name: "agile-node-app"})
});

app.get("/Student", (req, res) => {
    res.status(200).json([
        {
            name: "Tushar",
            age: 23,
            city: "Mumbai"
        }, {
            name: "Rajanikant",
            age: 67,
            city: "Chennai"
        }
    ])
});


app.listen(3000);
