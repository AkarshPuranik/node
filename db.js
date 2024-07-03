const mongoose = require('mongoose');

// const connection = mongoose. createConnection('mongodb://192.168.29.251:27017/data').on('open', ()=>{
//     console. log("MongoDb Connected");
//     }).on ('error', ()=>{
//     console. log("MongoDb connection error");
//     });
//     module.exports = connection;
mongoose.connect('mongodb+srv://akarshpuranik090:uLPiLgppHwKlnSbN@appdev.mljk79k.mongodb.net/',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });