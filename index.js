 const express = require('express');
 const cors = require('cors');
 require("dotenv").config()
 const { MongoClient, ServerApiVersion } = require('mongodb');
 const app = express()
 const port = process.env.PORT || 5000;

 //middleware
 app.use(cors());
 app.use(express.json());

 //brandShop
 //hLR4Fn9UAkdZoJcl

 console.log(process.env.DB_USER)
 console.log(process.env.DB_PASS)

 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wzxk65v.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const brandNameCollection = client.db('brandDB').collection('brandName');




    app.get('/brand', async (req, res) => {
      const cursor = brandNameCollection.find();
      const result = await cursor.toArray();
      res.send(result);
  });



    app.post('/brand', async (req, res) => {
      const brand = req.body;
      console.log(brand);
      const result = await brandNameCollection.insertOne(brand);
      res.send(result);
    });
















    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);



 app.get('/',(req,res) => {
    res.send('brand shopping server is running')
 })

 app.listen(port, ()=> {
    console.log(`BrandShopping Server is running on port: ${port}`)
 })