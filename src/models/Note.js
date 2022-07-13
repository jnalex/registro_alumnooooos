import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    nombre_alumno: {
      type: String,
      required: true,
    },
    rut: {
      type: String,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
    },
    curso: {
      type: String,
      required: true,
    },
    ciudad: {
      type: String,
      required: true,
    },
    sexo: {
      type: String,
      required: true,
    },
    direccion: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", NoteSchema);
