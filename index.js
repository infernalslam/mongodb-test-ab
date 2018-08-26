const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'local'
let db
MongoClient.connect(url, function(err, client) {
  db = client.db(dbName)
})



app.get('/', (req, res) => {
  db.
  db.collection('documents').updateOne({ field1: 0 }, { $inc: { items: 1 } })
  res.send('ok')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))