import mongoose from 'mongoose'

const connectDB = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/folder-structure");
    console.log("connected to database ");
}

export default connectDB;

