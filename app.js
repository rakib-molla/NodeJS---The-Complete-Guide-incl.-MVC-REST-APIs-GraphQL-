const http = require("http");

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next)=>{
  res.status(404).send("<h1 style='text-align:center'>Page Not Found</h1>")
})

app.listen(3000, ()=>{
  console.log('server is running on port: 3000')
})
