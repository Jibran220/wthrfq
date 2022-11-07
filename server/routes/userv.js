import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";

router.post("/signinv", signin);
router.post("/signupv", signup);

export default router;