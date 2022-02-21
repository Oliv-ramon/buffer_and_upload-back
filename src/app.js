import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.post("/", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
})

app.listen(5000, console.log("listening on 5000"));