import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  comment: String,
  userid: String,
});

export default mongoose.model("Comments", userSchema);
