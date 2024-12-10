import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { connection } from "./config/db";
import { readFile } from "fs";

const app = express();

config();
const PORT = process.env.PORT || 3000;
import { auth, formRouter } from "./routes";
//middleware

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/forms", formRouter);
app.use("/auth", auth);

app.listen(PORT, async () => {
    await connection.connect();
    // get file contents
    const file_path = "./config/db/form-builder.sql";
    console.log("connected to db");
    readFile(file_path, "utf-8", async (err, data) => {
        if (err) {
            console.log(err);
            throw new Error("Error reading file");
        }
        await connection.query(data);
        console.log("All tables created");
    });

    console.log(`connected to server: ${PORT}`);
});

export default app;
