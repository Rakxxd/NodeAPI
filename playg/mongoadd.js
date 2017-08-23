const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
 if(err)
    console.log('Unable to cnct');
 else
 console.log('Connected to Mongo');
 db.collection('Todos').insertOne({
     text : 'Sometimes you win sometime you learn.',
     author: 'Anonymous'
 },(err,result)=>{
  if(err)
    return console.log('Error');
  console.log(JSON.stringify(result.ops,undefined,2));
 });
 db.close();
});