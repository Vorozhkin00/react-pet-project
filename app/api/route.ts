import clientPromise from "@/libs/mongodb/startMongo";
import {ObjectId} from 'mongodb';


export async function GET(request: Request) {
  const client = await clientPromise;
  const cursor = await client.db("test").collection("greetings").find();
  const greetings = await cursor.toArray();
  return Response.json(greetings)
}

// export async function POST(request: Request) {
//   const client = await clientPromise;
//   const cursor = await client.db("test").collection("greetings").insertOne({greeting: "Goodbye cruel world"});
//   return Response.json({message: "successfully updated the document"});
// }

export async function POST(request: Request) {
  const client = await clientPromise;
  const body = await request.json();
  await client.db("test").collection("greetings").insertOne({greeting: body.greeting});
  return Response.json({message: "successfully updated the document"});
}

export async function PUT(request: Request) {
  const client = await clientPromise;
  const body = await request.json();
  const id = new ObjectId(body.id);
  await client.db("test").collection("greetings").updateOne({_id: id}, {$set: {greeting: body.greeting}});
  return Response.json({message: "successfully updated the document"});
}

export async function DELETE(request: Request) {
  const client = await clientPromise;
  const body = await request.json();
  const id = new ObjectId(body.id);
  await client.db("test").collection("greetings").deleteOne({_id: id});
  return Response.json({message: "successfully deleted the document"});

}