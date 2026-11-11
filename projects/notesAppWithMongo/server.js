import express from "express";
import mongoose from "mongoose";
import noteModel from "./model/note.model.js";

const app = express();

app.use(express.json());

async function connectToDb() {
  console.log("connected to mongo localhost ");
  await mongoose.connect("mongodb://localhost:27017/notesdb");
}
connectToDb();

app.post("/notes", async (req, res) => {
  const { title, description } = req.body;
  const note = await noteModel.create({ title, description });

  res.status(201).json({ messege: "notes creaetd successfully .", note: note });
});

app.get("/notes", async (req, res) => {
  const notes = await noteModel.find({});
  res.status(200).json({ messege: "fetching notes ", data: notes });
});

app.delete("/notes/:id", async (req, res) => {
  const {id} = req.params;
  await noteModel.findByIdAndDelete(id );//silent failure if not found 
  res.status(200).json({ messege: "note deleted successfully " });
});

app.patch("/notes/:id",async (req,res)=>{
    const {id} = req.params;
    const {description} =req.body;
    await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({messege : "updated successfully "});
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
