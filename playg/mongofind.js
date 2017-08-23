const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err)
    console.log('Unable to cnct');
 else
 console.log('Connected to Mongo');


 db.collection('Todos').find().toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
 },(err)=>{
  if(err)
    return console.log('Error');
  
 });
 db.close();
});