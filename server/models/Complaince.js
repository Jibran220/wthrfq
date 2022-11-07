





import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    Regulatory_Authority: String,
    category: String,
    applied_standard: String,
    Sub_Sections: String,
    Report_type: String,
    Status: String,
    originator: String,
    Compliance_Start_Date: String,
    Compliance_End_Date: String,
    country: String,


});

export default mongoose.model("Compaince", userSchema);