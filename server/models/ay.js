import mongoose from "mongoose";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
  name: String,
  to: String,
  from: String,
  Dates: String,
  vendordetails: String,
  date_and_time_picker: String,
  approver: String,
  description: String,
  any_other_instructions_for_quoting: String,
  statement_for_qualification: String,
  status: String,
});

export default mongoose.model("RFer", userSchema);
