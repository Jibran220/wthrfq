import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
    to: String,
  subject: String,
  body:String,
  file :String,
});

export default mongoose.model("po", userSchema);
