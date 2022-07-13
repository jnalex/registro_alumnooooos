import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admind:admind123@registroalumnos.w65ro.mongodb.net/registroescuela?retryWrites=true&w=majority";
