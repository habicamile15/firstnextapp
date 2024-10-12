import { MongoClient } from "mongodb";


export default async function connectdb()
{
try {
    const conn_url=process.env.DB_URL;

if(!conn_url) throw new Error("No url connection");

    const connection=await MongoClient.connect(conn_url); 

    return connection;
} catch (error) {
    console.log(error);
    throw new Error("Not connected to the Database");
}
    

  
}