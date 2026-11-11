import notesModel from '../models/notes.models.js';

export async function createdNote(req,res){
    const {title , description} =  req.body;
    const note = await notesModel.create({title,description})

    res.status(201).json({messege : "notes creted success ",note : note })
}

// export default createdNote;