import clientPromise from "@/libs/mongodb/startMongo";


// export async function GET(request: Request) {
//   const client = await clientPromise;
//   const cursor = await client.db("test").collection("greetings").find();
//   const greetings = await cursor.toArray();
//   return Response.json(greetings)
// }

export async function GET(req: Request) {
  const client = await clientPromise;
  const cursor = await client.db("test").collection("loftlyLoveProducts").find()
  const products = await cursor.toArray()
  return Response.json(products);
}