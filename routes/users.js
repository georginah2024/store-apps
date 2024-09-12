const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.sent('login ')
})

router.post('/register', (req, res) => {
    res.sent('register ')

})
module.exports = router;



