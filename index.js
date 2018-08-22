const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'local'

function getValueForNextSequence(sequenceOfName, db, num){
   var sequenceDoc = db.findAndModify({
      query:{_id: sequenceOfName },
      update: {$inc:{count: num}},
      new:true
   })
   return sequenceDoc.sequence_value
}

let db
MongoClient.connect(url, function(err, client) {
  db = client.db(dbName)
})


const express = require('express')
const app = express()

app.get('/', (req, res) => {
  db.collection('documents').updateOne({field1: 0}, {$inc: {items: 1}}, function (err, product) {})
  res.send('ok')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))