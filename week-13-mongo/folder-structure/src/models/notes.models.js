import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title : {
        type : String ,
        required: true
    },
    description : {
        type : String ,
        required: true
    }
})

const notesModel = mongoose.model('note',noteSchema);
//note ya notes namki collection database me nahi milti to ye create ho jati hi

export default notesModel;