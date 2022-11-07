import mongoose from "mongoose";
import products from "../models/userRFQ.js";
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
// export const createPost = async (req, res) => {
//   let newproductpost = new products(req.body);

//   let result = await newproductpost.save();
//   res.send(result);
// };
export const createPost = async (req, res) => {
  const { to } = req.body;
  const { Name } = req.body;

  const { rfq_name } = req.body;

  let newproductpost = new products(req.body);
  let result = await newproductpost.save();


  console.log(to);
  console.log(Name);
  console.log(rfq_name);

  const send_to = to;
  const sent_from = "muhammadjibran890@gmail.com";
  const reply_to = "muhammadjibran890@gmail.com";
  const subjecta = "You Selected for the RFQ ";
  const message = `
        <h3>Hello ${Name}</h3>
        <p>Hey, Congrulations! you are selected for the RFQ : ${rfq_name}. Please go and register yourself (/authv)</p>
        <p>Regards...</p>
        <p>Muhammad Jibran</p>
    `;

  await sendEmail(subjecta, message, send_to, sent_from, reply_to);





  res.send(result);




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
  let result = await products.find({ rfq_id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Find" });
  }
};
export const viewUserProfile = async (req, res) => {
  let result = await products.find({ _id: req.params.id });
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
// let result = await products.find({ to: req.params.id });
// if (result) {
//   res.send(result);
// } else {
//   res.send({ result: "No Record Find" });
// }

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
