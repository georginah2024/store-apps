const express = require("express");
const app = express();

app.use('/category', require('./routes/category'))
app.use('/purchase', require('./routes/purchase'))
app.use('/product', require('./routes/product'))
app.use('/sales', require('./routes/sales'))



app.get("/", (req, res) => {
    res.send("Welcome to the DressStore App")
});
app.listen(3000)



