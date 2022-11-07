import mongoose from "mongoose";
import products from "../models/RFQ_Manager.js";
import { sendEmail } from "./sendEmail.js";
import nodemailer from "nodemailer";
export const getProducts = async (req, res) => {
  try {
    const postMessages = await products.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletepost = async (req, res) => {
  let result = await products.deleteOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(req.params);
};

export const updatepost = async (req, res) => {
  let result = await products.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.send(result);
};
export const createPost = async (req, res) => {
  const { to } = req.body;
  const { name } = req.body;

  const productpost = req.body;
  const newproductpost = new products(productpost);
  try {
    console.log(to);
    console.log(name);

    const send_to = to;
    const sent_from = "muhammadjibran890@gmail.com";
    const reply_to = name;
    const subject = "Thank You Message From NodeCourse";
    const message = `
        <h3>Hello ${name}</h3>
        <p>Thank for your YouTube Tutorials</p>
        <p>Regards...</p>
    `;

    await sendEmail(subject, message, send_to, sent_from, reply_to);

    await newproductpost.save();

    console.log(productpost);
    res.status(200).json(newproductpost);
    // res.status(200).json({ success: true, message: "Email Sent" });
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const addd = async (req, res) => {
  const postMessages = req.body;
  console.warn(postMessages);
};

export const createexcel = async (req, res) => {
  csvtojson();
  const productpost = req.body;
  const newproductpost = new products(productpost)
    .fromFile(productpost)
    .then((csvData) => {
      console.log(csvData);
      products
        .insertMany(csvData)
        .then(function () {
          console.log("Dta is inserted");
          res.json({ success: "success" });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
};

export const getProduct = async (req, res) => {
  let result = await products.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Find" });
  }
};
//  export const getProductbyemail = async (req, res) => {

//     let result = await products.findOne({ to: req.params.to })
//     if (result) {
//         res.send(result)
//     } else {
//         res.send({ "result": "No Record Find" })
//     }

// }
export const getProductbyemail = async (req, res) => {
  console.log(req.params.email);
  let data = await products.find({
    $or: [{ to: { $regex: req.params.email } }],
  });
  res.send(data);
};

export const updateproduct = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  // {...post,_id}
  const updatedproduct = await products.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatedproduct);
};

export const deleteproduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  await products.findByIdAndRemove(id);
  res.json({ message: "Post Deleted Sucessfully" });
};
