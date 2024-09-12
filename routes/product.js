const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("all product")
})

router.get('/:id', (req, res) => {
    res.send("one product")
})
router.post('', (req, res) => {
    res.send("create product")
})
router.put('', (req, res) => {
    res.send("update product")
})

router.delete('/:id ', (req, res) => {
    res.send("delete product")
})
module.exports = router
