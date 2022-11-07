import mongoose from "mongoose";
import products from "../models/Complaince.js"


export const getProducts = async (req, res) => {
    try {
        const postMessages = await products.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    const productpost = req.body;
    const newproductpost = new products(productpost)
    try {
        await newproductpost.save();
        res.status(200).json(newproductpost)
        console.log(productpost);

    } catch (error) {
        res.status(409).json({ message: error })

    }

}
















