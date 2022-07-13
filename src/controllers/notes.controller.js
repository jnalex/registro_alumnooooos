import Note from "../models/Note.js";
import router from "../routes/notes.routes.js";

export const renderNoteForm = (req, res) => res.render("notes/new-note");

export const createNewNote = async (req, res) => {
  const { nombre_alumno, rut, edad, curso, ciudad, sexo, direccion } = req.body;
  const errors = [];
  if (!nombre_alumno) {
    errors.push({ text: "Porfavor ingrese nombre del alumno." });
  }
  if (!rut) {
    errors.push({ text: "Porfavor ingrese rut del alumno" });
  }
  if (!edad) {
    errors.push({ text: "Porfavor ingrese edad del alumno" });
  }
  if (!curso) {
    errors.push({ text: "Porfavor ingrese curso del alumno" });
  }
  if (!ciudad) {
    errors.push({ text: "Porfavor ingrese ciudad del alumno" });
  }
  if (!sexo) {
    errors.push({ text: "Porfavor ingrese sexo del alumno" });
  }
  if (!direccion) {
    errors.push({ text: "Porfavor ingrese direccion del alumno" });
  }
  if (errors.length > 0)
    return res.render("notes/new-note", {
      errors,
      nombre_alumno,
      rut,
      edad,
      curso,
      ciudad,
      sexo,
      direccion
    });

  const newNote = new Note({ nombre_alumno, rut, edad, curso, ciudad, sexo, direccion });
  newNote.user = req.user.id;
  await newNote.save();
  req.flash("success_msg", "Alumno agregado correctamente ");
  res.redirect("/notes");
};

export const renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};



export const renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash("error_msg", "No autorizado");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};





export const updateNote = async (req, res) => {
  const { nombre_alumno, rut, edad, curso, ciudad, sexo, direccion } = req.body;
  await Note.findByIdAndUpdate(req.params.id, { nombre_alumno, rut, edad, curso, ciudad, sexo, direccion  });
  req.flash("success_msg", "Alumno actualizado correctamente");
  res.redirect("/notes");
};

export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Alumno borrado correctamente");
  res.redirect("/notes");
};

