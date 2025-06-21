const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/:id", (req, res) => {
    id = req.params.id
    res.send(id)
})


module.exports = router