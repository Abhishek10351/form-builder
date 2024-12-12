import { config } from "dotenv";
import express from "express";
import cors from "cors";
import { connection } from "./config/db";
import { readFile } from "fs";
import { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
const app = express();

config();
const PORT = process.env.PORT || 8080;
import { auth, formRouter } from "./routes";
//middleware
import get_user from "./middleware/jwtauth";

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use((req: Request, res: Response, next: NextFunction) => {
    (async () => {
        await get_user(req, res, next);
    })();

    next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
    const timeout = 10000;
    // req.setTimeout(0);
    // res.setTimeout(timeout, () => {
    //     console.log("Response timed out");
    //     res.end();
    // });
    next();
});

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
