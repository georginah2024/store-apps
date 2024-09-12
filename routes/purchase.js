const express = require('express');
const router = express.Router()
router.get('/', (req, res) => {
    res.send("all purchase")
})

router.get('/:id', (req, res) => {
    res.send("one purchase")
})
router.post('', (req, res) => {
    res.send("create purchase")
})
router.put('', (req, res) => {
    res.send("update purchase")
})

router.delete('/:id ', (req, res) => {
    res.send("delete purchase")
})
module.exports = router
