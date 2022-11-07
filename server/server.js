import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from "cors";
import dotenv from "dotenv";
import  pdf from 'html-pdf'
import nodemailer from "nodemailer";
import authRoutes from "./routes/auth.js";
import messageRoutes from "./routes/messages.js";
// import { socket } from 'socket.io'
import { createServer } from "http";
import { Server } from "socket.io";
import postRoutes from "./routes/products.js";
import userRFQ from "./routes/userRFQ.js";
import userRouter from "./routes/user.js";
import CommentRouter from "./routes/Comments.js";
import uservRouter from "./routes/userv.js";
import ComplainceRouter from "./routes/Complaince.js";
import rfqRouter from "./routes/RFQ_Manager.js";
import UserAttachments from "./routes/UserAttachments.js";
import attachments from "./routes/attachments.js";
import po from "./routes/po.js";
import Ay from "./routes/Ay.js";

import pdfTemplate from'./documents/index.js'
import multer from "multer";

import csvModel from "./models/products.js";
import csv from "csvtojson";

dotenv.config();

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/products", postRoutes);
app.use("/userattachments", UserAttachments);
app.use("/ay", Ay);
app.use("/po", po);
app.use("/attachments", attachments);
app.use("/commentrouter", CommentRouter);
app.use("/complaince", ComplainceRouter);
app.use("/rfqmanagers", rfqRouter);
app.use("/userrfq", userRFQ);
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.use("/user", userRouter);
app.use("/userv", uservRouter);
app.get("/", (req, res) => res.status(200).send("Hello world"));
app.get("/favicon.ico", (req, res) => res.status(200).send("Hello favicon"));

// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
//     .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var uploads = multer({ storage: storage });

const PORT = process.env.PORT || 5005;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//static folder
// app.use(express.static(path.resolve(__dirname, 'public')));
app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
      if(err) {
          res.send(Promise.reject());
      }

      res.send(Promise.resolve());
  });
});
app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})
//default pageload
app.get("/add", (req, res) => {
  csvModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data != "") {
        res.render("demo", { data: data });
      } else {
        res.render("demo", { data: "" });
      }
    }
  });
});

var temp;

app.post("/", uploads.single("csv"), (req, res) => {
  //convert csvfile to jsonArray
  csv()
    .fromFile(req.file.path)
    .then((jsonObj) => {
      console.log(jsonObj);
      for (var x = 0; x < jsonObj; x++) {
        // temp = parseFloat(jsonObj[x].Test1)
        // jsonObj[x].Test1 = temp;
        // temp = parseFloat(jsonObj[x].Test2)
        // jsonObj[x].Test2 = temp;
        // temp = parseFloat(jsonObj[x].Test3)
        // jsonObj[x].Test3 = temp;
        // temp = parseFloat(jsonObj[x].Test4)
        // jsonObj[x].Test4 = temp;
        // temp = parseFloat(jsonObj[x].Final)
        // jsonObj[x].Final = temp;
      }
      csvModel.insertMany(jsonObj, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/");
        }
      });
    });
});

const CONNECTION_URL =
  "mongodb+srv://MuhammadJibran:jibran890@cluster0.6ujeevy.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(process.env.CONNECTION_URL, () => {
  console.log("database connected");
});
mongoose.con;

const server = app.listen(PORT, () => console.log("Listening on port ", PORT));
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});

/*
    Video: https://www.youtube.com/watch?v=Va9UKGs1bwI
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/
