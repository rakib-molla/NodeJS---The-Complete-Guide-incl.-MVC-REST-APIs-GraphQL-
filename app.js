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

//this is for ejs template engine
app.set('view engine', 'ejs');
app.set('views','views');

// set globally  for pug default html template engine 
// app.set('view engine', 'pug');
// app.set('views','views');

// all routes 
app.use('/admin',adminData.routes);
app.use(shopRoutes);

// send  404 not found page into frontend
app.use((req, res, next)=>{
  // res.status(404).sendFile(path.join(rootDir, 'views','404-not-found.html'));
  res.status(404).render('404', {pageTitle: "404 Not Found"})
})

app.listen(3000, ()=>{
  console.log('server is running on port: 3000')
})
