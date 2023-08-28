import mongoose from "mongoose";

let isConnected = false; // is connected

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDb is already connected!');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGOBD_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        
        isConnected = true;
        console.log("MongoDb connected!")
    } catch (error) {
        console.log(error);
    }
}