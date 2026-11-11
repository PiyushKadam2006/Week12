import {Router} from 'express'
// import {createdNote} from '../controllers/notes.controller'
import * as notesController from "../controllers/notes.controller.js"

/**
 * /api/notes
 */


const notesRouter = Router();

/**
 * POST /api/notes
 * @argument req.body.title String 
 * @argument req.body.description String 
 * @argument 201 {messege : "note created success "} 
 */

notesRouter.post("/",notesController.createdNote);

export default notesRouter;