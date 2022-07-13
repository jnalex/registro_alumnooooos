import Note from '../models/Note.js'
import { Router } from "express";
import {
  renderNoteForm,
  createNewNote,
  renderNotes,
  renderEditForm,
  updateNote,
  deleteNote,
} from "../controllers/notes.controller.js";
import { isAuthenticated } from "../helpers/auth.js";

const router = Router();


// New Note
router.get("/notes/add", isAuthenticated, renderNoteForm);

router.post("/notes/new-note", isAuthenticated, createNewNote);

// Get All Notes
router.get("/notes", isAuthenticated, renderNotes);

//Find Note

router.get('/ciudad', async (req, res) =>{
  const ciudad = await Note.distinct('ciudad');
  res.render('ciudad',{ciudad});
});

router.get('/notes/ciudad/:ciudad', async (req,res) =>{    
  const ciudad = await Note.find({'ciudad':req.params.ciudad}).lean();     
  res.render('notes', {ciudad});                    
});

router.get('/edad', async (req,res) =>{    
  const edad = await Note.distinct('edad');     
  res.render('edad', {edad});                    
});

router.get('/notes/edad/:edad', async (req,res) =>{    
  const edad = await Note.find({'edad':req.params.edad}).lean();     
  res.render('notes2', {edad});                    
});


router.get('/curso', async (req, res) =>{
  const curso = await Note.distinct('curso');
  res.render('curso',{curso});
});

router.get('/notes/curso/:curso', async (req,res) =>{    
  const curso = await Note.find({'curso':req.params.curso}).lean();     
  res.render('notes3', {curso});                    
});



// Edit Notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);

router.put("/notes/edit-note/:id", isAuthenticated, updateNote);

// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

export default router;
