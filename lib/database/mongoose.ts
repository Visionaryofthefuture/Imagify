import mongoose, {Mongoose} from "mongoose";

const mongo_url = process.env.MONGODB_URL;


interface mongooseconnection  {
    conn : Mongoose | null;
    promise : Promise<Mongoose> | null;
}

// as next js is a serverless architecture , it makes the request to connect to database every time , hence we need a cache

let cached : mongooseconnection = (global as any).mongoose; 

// if cached doesnt exist

if(!cached)
{
    cached = (global as any).mongoose;

    cached.conn = null;
    cached.promise = null;
}

export const connectdatabase = async () =>
{

    if(cached.conn)
    {
        return cached.conn;
    }

    if(!mongo_url)
    {
        throw new Error("Missing mongodb URL");
    }

    cached.promise = cached.promise || mongoose.connect(mongo_url, {dbName : "imagify" , bufferCommands : false});
    cached.conn = await(cached.promise)
}