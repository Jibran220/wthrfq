import mongoose from "mongoose";
import products from "../models/products.js";
import csvtojson from "csvtojson";
import nodemailer from "nodemailer";

export const getProducts = async (req, res) => {
  try {
    const postMessages = await products.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
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

// export const createPost = async (req, res) => {
//   const { _id } = req.body;
//   const productpost = req.body;
//   const newproductpost = new products(productpost);

//   try {
//     await newproductpost.save();
//     res.status(200).json(newproductpost);
//   } catch (error) {
//     res.status(409).json({ message: error });
//   }
// };
export const createPost = async (req, res) => {
  const { productname } = req.body;
  

  const productpost = req.body;
  const newproductpost = new products(productpost);
  try {
    console.log(productname);

    const send_to = "muhammadjibran890@gmail.com";
    const sent_from = "muhammadjibran890@gmail.com";
    const reply_to = "muhammadjibran890@gmail.com";
    const subject = "A new Product is Added";
    const message = `
        <h3>Hello Admin</h3>
        <p>A new Product is added Name = ${productname}. </p>
        <p>Regards...</p>
        <p>Muhammad Jibran</p>
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
