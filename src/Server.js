const {MongoClient,ObjectId} = require('mongodb');

const uri = 'mongodb+srv://Munees:8072@mwkb.4dmfk5l.mongodb.net/?retryWrites=true&w=majority&appName=mwkb';

const client = new MongoClient(uri);

async function connectToMongo(){
    try{
        await client.connect();
        console.log("Connected Successfully");
        // const db = client.db('<database>');
        // const collection = db.collection('<collection>');
    }
    catch (error) {
        console.error('Error connecting to MongoDB Atlas', error);
      }
      finally {
        // Close the connection when done (optional)
        await client.close();
        console.log('MongoDB connection closed');
      }
}