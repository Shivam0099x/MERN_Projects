import "dotenv/config";

import express from "express";
import cors from "cors";

import { connectDb } from "./lib/db.js";
import NotesRouter from "./routes/notes.routes.js"

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    httpOnly: true,
  }),
);

app.use("/notes", NotesRouter)

connectDb()
.then(() => {
    app.listen(PORT, (err) => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log(`Error in connectDb funciton ${er}`);
});
