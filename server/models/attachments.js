import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
  files: String,
  title:String,
  userid :String,
  Dates: {
    type: Date,
    default: new Date(),
  },
 
});

export default mongoose.model("attachments", userSchema);
