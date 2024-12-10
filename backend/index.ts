import { config } from "dotenv";
import express from "express";
import cors from "cors";
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

app.listen(PORT, () => {
    console.log(`connected to server: ${PORT}`);
});

export default app;
