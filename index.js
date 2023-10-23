const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//brandShop
//hLR4Fn9UAkdZoJcl

console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wzxk65v.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    const brandNameCollection = client.db("brandDB").collection("brandName");

    const appleCollection = client.db("brandDB").collection("apple");
    const samsungCollection = client.db("brandDB").collection("samsung");
    const asusCollection = client.db("brandDB").collection("asus");
    const xiaomiCollection = client.db("brandDB").collection("xiaomi");
    const sonyCollection = client.db("brandDB").collection("sony");
    const realmeCollection = client.db("brandDB").collection("realme");





    app.post("/apple", async (req, res) => {
      const apple = req.body;
      const result = await appleCollection.insertOne(apple);
      res.send(result);
    });

    app.get('/apple', async (req, res) => {
      const cursor = appleCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/apple/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await appleCollection.findOne(query);
      res.send(result);
    });







    app.post("/samsung", async (req, res) => {
      const samsung = req.body;
      const result = await samsungCollection.insertOne(samsung);
      res.send(result);
    });

    app.get('/samsung', async (req, res) => {
      const cursor = samsungCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/samsung/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await samsungCollection.findOne(query);
      res.send(result);
    });














    app.post("/asus", async (req, res) => {
      const asus = req.body;
      const result = await asusCollection.insertOne(asus);
      res.send(result);
    });

    app.get('/asus', async (req, res) => {
      const cursor = asusCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/asus/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await asusCollection.findOne(query);
      res.send(result);
    });



















    app.post("/xiaomi", async (req, res) => {
      const xiaomi = req.body;
      const result = await xiaomiCollection.insertOne(xiaomi);
      res.send(result);
    });

    app.get('/xiaomi', async (req, res) => {
      const cursor = xiaomiCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/xiaomi/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await xiaomiCollection.findOne(query);
      res.send(result);
    });


















    app.post("/sony", async (req, res) => {
      const sony = req.body;
      const result = await sonyCollection.insertOne(sony);
      res.send(result);
    });


    app.get('/sony', async (req, res) => {
      const cursor = sonyCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/sony/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await sonyCollection.findOne(query);
      res.send(result);
    });










    app.post("/realme", async (req, res) => {
      const realme = req.body;
      const result = await realmeCollection.insertOne(realme);
      res.send(result);
    });

    app.get('/realme', async (req, res) => {
      const cursor = realmeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/realme/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await realmeCollection.findOne(query);
      res.send(result);
    });














    app.get("/brand", async (req, res) => {
      const cursor = brandNameCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("brand shopping server is running");
});

app.listen(port, () => {
  console.log(`BrandShopping Server is running on port: ${port}`);
});
