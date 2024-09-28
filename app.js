const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

require('dotenv').config()

// Connection URL
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  client.close();
});