const express = require('express')
const app = express();
const user = express.Router();

const users = [
    {
        id: 1,
        name: "anas",
        email: "anas@gmail.com"
    },
    {
        id: 2,
        name: "ahmed",
        email: "ahmed@gmail.com"
    },
]

user.get("/", (req, res) => {
    res.status(200).json({ users })
})

module.exports = user;
