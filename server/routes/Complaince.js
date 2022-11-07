import express from "express"
import { getProducts, createPost } from "../controllers/Complaince.js"
const router = express.Router();
import auth from "../middleware/auth.js";

router.get("/", getProducts)
router.post("/", createPost)



export default router;