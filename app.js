const express = require('express');
const path = require('path');
const rootDir = require('./utils/path');

const bodyParser = require('body-parser');
const app = express();
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}))

// send to static folder to front only this folder read access 
app.use(express.static(path.join(rootDir, 'public')));


// all routes 
app.use('/admin',adminData.routes);
app.use(shopRoutes);


// send  404 not found page into frontend
app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootDir, 'views','404-not-found.html'));
})


app.listen(3000, ()=>{
  console.log('server is running on port: 3000')
})
