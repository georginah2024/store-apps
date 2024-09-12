const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send("all categories")
})

router.get('/:id', (req, res) => {
    res.send("one categories")
})
router.post('', (req, res) => {
    res.send("create categories")
})
router.put('', (req, res) => {
    res.send("update categories")
})

router.delete('/:id ', (req, res) => {
    res.send("delete categories")
})

module.exports = router