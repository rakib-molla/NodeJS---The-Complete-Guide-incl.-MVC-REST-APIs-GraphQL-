const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) =>{
  MongoClient.connect('mongodb+srv://complete-node:complete-node@cluster0.clwxeiy.mongodb.net/').then((client)=>{
    callback(client);
    console.log("database connected")
  }).catch((err)=>{
    console.log(err)
  })
}


module.exports = mongoConnect;
