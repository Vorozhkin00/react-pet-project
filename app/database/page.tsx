import {MongoClient, ServerApiVersion} from "mongodb";

// const {MongoClient, ServerApiVersion} = require('mongodb');
// const uri = "mongodb+srv://vladyslav:vlad23@cluster0.dig58.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("environment variable MONGODB_URI is not defined");
}

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const cursor = client.db("test").collection("greetings").find();
    return await cursor.toArray()
    // await client.db("admin").command({ping: 1});
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export default async function Database() {
  // run().catch(console.dir);
  const greetings = await run();
  return (
    <>
      {greetings.map(greetingObj => <h1 key={greetingObj._id.toString()}>{greetingObj.test}</h1>)}
    </>
  )
}
