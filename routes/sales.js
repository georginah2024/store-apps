const express = require('express');
const router = express.Router()
router.get('/', (req, res) => {
    res.send("all sales")
})

router.get('/:id', (req, res) => {
    res.send("one sales")
})
router.post('', (req, res) => {
    res.send("create sales")
})
router.put('', (req, res) => {
    res.send("update sales")
})

router.delete('/:id ', (req, res) => {
    res.send("delete sales")
})

module.exports = router
