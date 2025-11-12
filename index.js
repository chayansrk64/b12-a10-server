require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000


// middleware
app.use(cors())
app.use(express.json())




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hkduy2w.mongodb.net/?appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get("/", (req, res) => {
    res.send("Server is Running...")
})

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db('pawmart')
    const userCollection = database.collection('users')
    const listingCollection = database.collection('listings')
    const orderCollection = database.collection('orders')



    app.post('/users', async(req, res) => {
        const newUser = req.body;
        const email = req.body.email;
        const query = {email: email}
        const existingUser = await userCollection.findOne(query)

        if(existingUser){
            res.status(409).send({message: "user already exists!"})
        }else {
            const result = await userCollection.insertOne(newUser)
            res.send(result)
        }

    })

    app.get('/listings', async(req, res) => {
        const email = req.query.email;
        const query = {};
        if(email){
          query.email = email
        }
        const cursor = listingCollection.find(query)
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/listings/:id', async(req, res) => {
        const id = req.params.id;
        const query = {_id: new ObjectId(id)}
        const result = await listingCollection.findOne(query)
        res.send(result)
    })

    app.post('/listings', async(req, res) => {
        const listing = req.body;
        const result = await listingCollection.insertOne(listing)
        res.send(result)
    })

    app.patch('/listings/:id', async(req, res) => {
        const id = req.params.id;
        const updatedListing = req.body;
        const query = {_id: new ObjectId(id)};
        const update = {
           $set: {
              ...updatedListing
           }
        }
        const result = await listingCollection.updateOne(query, update)
        res.send(result)
    })

    app.get('/categories', async(req, res) => {
        const cursor = listingCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.post('/orders', async(req, res) => {
        const order = req.body;
        const result = await orderCollection.insertOne(order)
        res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})