import express from "express";
import cors from "cors";
import multer from "multer";

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(cors());

app.post("/", upload.single("image"), (req, res) => {
  const { body, file } = req;
  console.log(body);
  console.log(file);
  res.sendStatus(200);
})

app.listen(5000, console.log("listening on 5000"));