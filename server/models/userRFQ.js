import mongoose from "mongoose";
import internal from "stream";
import { formatWithOptions } from "util";

const userSchema = mongoose.Schema({
  rfq_id: String,
  rfq_name: String,
  Name: String,
  Company_Name: String,
  to: String,
  Work_Phone: String,
  // from: String,
  //    Dates: String,
  Dates: {
    type: Date,
    default: new Date(),
  },
  vendordetails: String,
  // date_and_time_picker: String,
  approver: String,
  description: String,
  // any_other_instructions_for_quoting: String,
  // statement_for_qualification: String,
  status: String,
});

export default mongoose.model("userRFQ_Manager", userSchema);
