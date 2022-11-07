import { Row, Col, Form, Image } from "react-bootstrap";
import Card from "../../../Card";

//
import axios from "axios";

import React, { useState, useEffect } from "react";
import useStyles from "./styles";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { createProducts, updateProducts } from "../../../actions/products";
import Base64Downloader from "react-base64-downloader";
import { useNavigate, Link, useParams } from "react-router-dom";
// img
const UpdatePost = ({ currentId, setCurrentId }) => {
  
  const [postData, setPostData] = useState({
    Regulatory_Model_Name: "",
    Product_Name: "",
    Regulatory_Family: "",
    Product_Category: "BATT",
    Product_Description: "",
    Model_Difference: "",
    Household: "",
    Commercial: "",
    Clinical: "",
    Applicable_Standards: "IEC 60086-1:2015",
    Applicant_Name_and_Address: "",
    Manufacturer_Name_and_Address: "",
    TradeMark: "",
    Family: "",
    Market: "Africa",

    Overall_Size_of_Equipment: "",
    WebGLShader: "mm",
    Voltage: "",
    Phase: "",
    Frequency: "",
    Power: "",
    Current: "",
    Operation_Mode: "",
    Ordinary_person: "",
    Children_likely_present: "",
    Instructed_person: "",
    Skilled_person: "",
    AC_mains: "",
    DC_mains: "",
    Battery_Powered: "",
    Skilled_person: "",

    Non_detachable_Supply_Cord: "",
    Appliance_Coupler: "",
    Direct_plug_in: "",
    Non_detachable_Supply_Cord_B: "",
    Appliance_Coupler_B: "",

    Permanent_connection: "",
    Mating_connector: "",
    Movable: "",
    Transportable: "",
    Stationary_for_building_in: "",
    Wall_ceiling_mounted_SRME_rack_mounted: "",
    Hand_held: "",
    Other: "",

    Pollution_Degree: "",
    Manufacturer_Specific_Max_Operating_Ambient: "",
    Ingree_Protection_Classification: "",
    Altitude_During_Operation: "",
    Mass_Of_Equipment: "",
    Relative_Humidity: "",
    Atmospheric_Pressure: "",
    Indoor: "",
    Outdoor: "",

    Copy_of_Marking_Plate: "",
    WarningOrCautionary_Marking: "",
    Fuse_Type: "",
    Fuse_Marking: "",

    //complaince report
    Report_Number: "No Option",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getproductdetail();
  }, []);
  const getproductdetail = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5005/products/${params.id}`);

    result = await result.json();
    console.warn(result);
    // setPostData({ Product_Name: (result.Product_Name) })
    // setPostData({ Product_Name: (result.    ) })
    setPostData({ Product_Name: result.Product_Name });
    setPostData({ Product_Name: result.Product_Name });
    setPostData({ Regulatory_Family: result.Regulatory_Family });
    setPostData({ Product_Category: result.Product_Category });
    setPostData({ Product_Description: result.Product_Description });
    setPostData({ Model_Difference: result.Model_Difference });

    setPostData({ Household: result.Household.value });
    setPostData({ Commercial: result.Commercial.value });
    setPostData({ Clinical: result.Clinical.value });

    setPostData({ Applicable_Standards: result.Applicable_Standards });
    setPostData({
      Applicant_Name_and_Address: result.Applicant_Name_and_Address,
    });
    setPostData({
      Manufacturer_Name_and_Address: result.Manufacturer_Name_and_Address,
    });
    setPostData({ TradeMark: result.TradeMark });
    setPostData({ Family: result.Family });
    setPostData({ Market: result.Market });

    //product technical information
    setPostData({
      Overall_Size_of_Equipment: result.Overall_Size_of_Equipment,
    });
    setPostData({ WebGLShader: result.WebGLShader });
    setPostData({ Voltage: result.Voltage });
    setPostData({ Phase: result.Phase });
    setPostData({ Frequency: result.Frequency });
    setPostData({ Power: result.Power });
    setPostData({ Current: result.Current });
    setPostData({ Operation_Mode: result.Operation_Mode });
    setPostData({ Classification_of_use_by: result.Classification_of_use_by });
    setPostData({ Supply_Connection: result.Supply_Connection });
    setPostData({
      Pluggable_equipment_type_A: result.Pluggable_equipment_type_A,
    });
    setPostData({
      Pluggable_equipment_type_B: result.Pluggable_equipment_type_B,
    });
    setPostData({ other_types: result.other_types });
    setPostData({ Equipment_Mobility: result.Equipment_Mobility });

    //product inviromenttal information
    setPostData({ Pollution_Degree: result.Pollution_Degree });
    setPostData({
      Manufacturer_Specific_Max_Operating_Ambient:
        result.Manufacturer_Specific_Max_Operating_Ambient,
    });
    setPostData({
      Ingree_Protection_Classification: result.Ingree_Protection_Classification,
    });
    setPostData({
      Altitude_During_Operation: result.Altitude_During_Operation,
    });
    setPostData({ Mass_Of_Equipment: result.Mass_Of_Equipment });
    setPostData({ Relative_Humidity: result.Relative_Humidity });
    setPostData({ Indoor_or_Outdoor: result.Indoor_or_Outdoor });

    //mareting and documentatation,
    setPostData({ Copy_of_Marking_Plate: result.Copy_of_Marking_Plate });
    setPostData({
      WarningOrCautionary_Marking: result.WarningOrCautionary_Marking,
    });
    setPostData({ Fuse_Type: result.Fuse_Type });
    setPostData({ Fuse_Marking: result.Fuse_Marking });

    //complaince report
    setPostData({ Report_Number: result.Report_Number });

    //    if (result.    Household==="true") {
    //        console.log("first")
    //    }
    if (result.Household == true) {
      console.log(" 1 AC_mains");
    }

    if (result.AC_mains === false) {
      console.log("2 AC_mains");
    }

    // if (result.    Commercial==="true") {
    //     console.log("Commercial")
    // }
    // console.log (result.Household)
    // if  (result.Household==true)
    // document.getElementById("1").checked = true
    if (result.Household == "Household") {
      document.getElementById("1").checked = true;
    }
    if (result.Clinical == "Clinical") {
      document.getElementById("2").checked = true;
    }
    if (result.Commercial == "Commercial") {
      document.getElementById("3").checked = true;
    }
    // if (result.Commercial == true) {document.getElementById("4").checked = true}
    // if (result.Commercial == true) {document.getElementById("5").checked = true}
    if (result.Ordinary_person == "Ordinary_person") {
      document.getElementById("6").checked = true;
    }
    if (result.Children_likely_present == true) {
      document.getElementById("7").checked = true;
    }
    if (result.Instructed_person == "Children_likely_present") {
      document.getElementById("8").checked = true;
    }
    if (result.Skilled_person == "Skilled_person") {
      document.getElementById("9").checked = true;
    }
    if (result.AC_mains == "AC_mains") {
      document.getElementById("10").checked = true;
    }
    if (result.DC_mains == "DC_mains") {
      document.getElementById("11").checked = true;
    }
    if (result.Battery_Powered == "Battery_Powered") {
      document.getElementById("12").checked = true;
    }
    if (result.Non_detachable_Supply_Cord == "Non_detachable_Supply_Cord") {
      document.getElementById("13").checked = true;
    }
    if (result.Appliance_Coupler == "Appliance_Coupler") {
      document.getElementById("14").checked = true;
    }
    if (result.Direct_plug_in == "Direct_plug_in") {
      document.getElementById("15").checked = true;
    }
    if (result.Non_detachable_Supply_Cord_B == "Non_detachable_Supply_Cord_B") {
      document.getElementById("16").checked = true;
    }
    if (result.Appliance_Coupler_B == "Appliance_Coupler_B") {
      document.getElementById("17").checked = true;
    }
    if (result.Permanent_connection == "Permanent_connection") {
      document.getElementById("18").checked = true;
    }
    if (result.Mating_connector == "Mating_connector") {
      document.getElementById("19").checked = true;
    }
    if (result.Movable == "Movable") {
      document.getElementById("20").checked = true;
    }
    if (result.Transportable == "Transportable") {
      document.getElementById("21").checked = true;
    }
    if (result.Stationary_for_building_in == "Stationary_for_building_in") {
      document.getElementById("22").checked = true;
    }
    if (
      result.Wall_ceiling_mounted_SRME_rack_mounted ==
      "Wall_ceiling_mounted_SRME_rack_mounted"
    ) {
      document.getElementById("23").checked = true;
    }
    if (result.Hand_held == "Hand_held") {
      document.getElementById("24").checked = true;
    }
    if (result.Outdoor == "Outdoor") {
      document.getElementById("25").checked = true;
    }
    if (result.TradeMark == "Yes") {
      document.getElementById("26").checked = true;
    }
    if (result.TradeMark == "No") {
      document.getElementById("27").checked = true;
    }
    if (result.Operation_Mode == "Continuos") {
      document.getElementById("28").checked = true;
    }
    if (result.Operation_Mode == "Duty Cycle") {
      document.getElementById("29").checked = true;
    }
    if (result.Pollution_Degree == "P1") {
      document.getElementById("30").checked = true;
    }
    if (result.Pollution_Degree == "P2") {
      document.getElementById("31").checked = true;
    }
    if (result.Pollution_Degree == "P3") {
      document.getElementById("32").checked = true;
    }
    if (result.Fuse_Type == "Replaceable") {
      document.getElementById("33").checked = true;
    }
    if (result.Fuse_Type == "Non-Replaceable") {
      document.getElementById("34").checked = true;
    }
    if (result.Fuse_Type == "None") {
      document.getElementById("35").checked = true;
    }
    if (result.Indoor == "Indoor") {
      document.getElementById("256").checked = true;
    }
    if (result.Children_likely_present == "Children_likely_present") {
      document.getElementById("7").checked = true;
    }
    if (result.Instructed_person == "Instructed_person") {
      document.getElementById("8").checked = true;
    }
    if (result.Non_detachable_Supply_Cord_B == "Non_detachable_Supply_Cord_B") {
      document.getElementById("16").checked = true;
    }
    if (result.Appliance_Coupler_B == "Appliance_Coupler_B") {
      document.getElementById("17").checked = true;
    }
  };

  // const clear = () => {
  //     setCurrentId(0);
  //     setPostData({
  //         Regulatory_Model_Name: '',
  //         Product_Name: '',
  //         Regulatory_Family: '',
  //         Product_Category: '',
  //         Product_Description: '',
  //         Model_Difference: '',
  //         Household: false,
  //         Commercial: false,
  //         Clinical:false,
  //         Applicable_Standards: '',
  //         Applicant_Name_and_Address: '',
  //         Manufacturer_Name_and_Address: '',
  //         TradeMark: '',
  //         Family: '',
  //         Market: '',

  //         Overall_Size_of_Equipment: '',
  //         WebGLShader: '',
  //         Voltage: '',
  //         Phase: '',
  //         Frequency: '',
  //         Power: '',
  //         Current: '',
  //         Operation_Mode: '',
  //         Ordinary_person: '',
  //         Children_likely_present: '',
  //         Instructed_person: '',
  //         Skilled_person: '',
  //         AC_mains: '',
  //         DC_mains: '',
  //         Battery_Powered: '',
  //         Skilled_person: '',

  //         Non_detachable_Supply_Cord: '',
  //         Appliance_Coupler: '',
  //         Direct_plug_in: '',
  //         Non_detachable_Supply_Cord_B: '',
  //         Appliance_Coupler_B: '',

  //         Permanent_connection: '',
  //         Mating_connector: '',
  //         Movable: '',
  //         Transportable: '',
  //         Stationary_for_building_in: '',
  //         Wall_ceiling_mounted_SRME_rack_mounted: '',
  //         Hand_held: '',
  //         Other: '',

  //         Pollution_Degree: '', Manufacturer_Specific_Max_Operating_Ambient: '',
  //         Ingree_Protection_Classification: '', Altitude_During_Operation: '',
  //         Mass_Of_Equipment: '', Relative_Humidity: '', Atmospheric_Pressure: '', Indoor: '',
  //         Outdoor: '',

  //         Copy_of_Marking_Plate: '',
  //         WarningOrCautionary_Marking: '',
  //         Fuse_Type: '',
  //         Fuse_Marking: '',

  //         //complaince report
  //         Report_Number: '',
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(updateProducts(params.id, postData));
      navigate("/");

      // clear();
    } else {
      dispatch(updateProducts(params.id, postData));
      navigate("/productht");
      // clear();
    }
  };
  // const handlee = (e) => {
  //     const value = e.target.value
  //     const checked = e.target.checked
  //     if (checked) {
  //         setPostData({ selectedFile: (result.selectedFile) })

  //     }
  // }
  // if (!user?.result?.name) {
  //     return (
  //         <Paper className={classes.paper}>
  //             <Typography variant="h6" align="center">
  //                 Please Sign In to Enter this Dashboard.

  //             </Typography>
  //         </Paper>
  //     );
  // }
  const base64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAAMSURBVBhXY/jPYAwAAzQBM849AKsAAAAASUVORK5CYII=";

  const [show, AccountShow] = useState("A");
  return (
    <>
      <div>
        <Row>
          <Col sm="12" lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Simple Wizard</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Form
                  id="form-wizard1"
                  className="text-center mt-3"
                  onSubmit={handleSubmit}
                >
                  <ul id="top-tab-list" className="p-0 row list-inline">
                    <li
                      className={` ${show === "Image" ? " active done" : ""} ${
                        show === "Personal" ? " active done" : ""
                      } ${show === "Account" ? " active done" : ""} ${
                        show === "A" ? "active" : ""
                      } col-lg-3 col-md-6 text-start mb-2 active`}
                      id="account"
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span>Product Information</span>
                      </Link>
                    </li>
                    <li
                      id="personal"
                      className={`${
                        show === "Personal" ? " active done" : ""
                      } ${show === "Image" ? " active done" : ""} ${
                        show === "Account" ? "active " : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <span> Product Technical Information</span>
                      </Link>
                    </li>
                    <li
                      id="payment"
                      className={`${show === "Image" ? " active done" : ""} ${
                        show === "Personal" ? "active" : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span>Product Enivoromental Information</span>
                      </Link>
                    </li>
                    <li
                      id="confirm"
                      className={`${
                        show === "Image" ? " active " : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>Marketing and Documentation</span>
                      </Link>
                    </li>
                  </ul>

                  {/* <fieldset
                    className={`${show === "Personal" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Enviromental Information: </h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 3 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Pollution Degree:{" "}
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="P1"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Pollution_Degree: e.target.value,
                                  })
                                }
                                name="a"
                                id="30"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                P1
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="P2"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Pollution_Degree: e.target.value,
                                  })
                                }
                                name="a"
                                id="31"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                P2
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="P3"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Pollution_Degree: e.target.value,
                                  })
                                }
                                name="a"
                                id="32"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                P3
                              </Form.Check.Label>
                            </Form.Check>{" "}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Manufacturer Specific Max Operating Ambient: *
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              value={
                                postData.Manufacturer_Specific_Max_Operating_Ambient
                              }
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Manufacturer_Specific_Max_Operating_Ambient:
                                    e.target.value,
                                })
                              }
                              placeholder="in *C"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Ingree Protection Classification:{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Ingree_Protection_Classification}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Ingree_Protection_Classification:
                                    e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Altitude During Operation:{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Altitude_During_Operation}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Altitude_During_Operation: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Mass Of Equipment (in kg):{" "}
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              value={postData.Mass_Of_Equipment}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Mass_Of_Equipment: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Relative Humidity (%):{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Relative_Humidity}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Relative_Humidity: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Atmospheric Pressure [kPa]:{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Atmospheric_Pressure}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Atmospheric_Pressure: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Indoor or Outdoor:{" "}
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                checked={postData.Indoor}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Indoor: e.target.checked,
                                  })
                                }
                                id="256"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Indoor
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                checked={postData.Outdoor}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Outdoor: e.target.checked,
                                  })
                                }
                                id="25"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Outdoor
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Submit"
                      onClick={() => AccountShow("Image")}
                    >
                      Next
                    </button>
                    <button
                      type="button"
                      name="previous"
                      className="btn btn-dark previous action-button-previous float-end me-1"
                      value="Previous"
                      onClick={() => AccountShow("Account")}
                    >
                      Previous
                    </button>
                  </fieldset> */}
                  {/* <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card">
                                            <div className="row">
                                            <div className="col-7">
                                                <h3 className="mb-4 text-left">Marketing and Documentation:</h3>
                                           </div>
                                            <div className="col-5">
                                                <h2 className="steps">Step 4 - 4</h2>
                                            </div>
                                            </div>
                                            <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Regulatory Family: *</label>
                                                    <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value })}  />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label">Regulatory Family: *</label>
                                                    <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value })}  />
                                                </div>
                                            </div>
                                            </div>
                                            </div>
                              
                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Submit" onClick={() => AccountShow('Image')} >Submit</button>

                                    </fieldset> */}
                  <fieldset
                    className={`${show === "Image" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">
                            Marketing And Documentation:{" "}
                          </h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 4 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">
                              Copy of Marking Plate:{" "}
                            </label>
                            <Form.Group>
                              <Form.Label className="custom-file-input"></Form.Label>
                              <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                  setPostData({
                                    ...postData,
                                    Copy_of_Marking_Plate: base64,
                                  })
                                }
                              />

                              {/* <Form.Control  type="file" id="customFile1"/> */}
                            </Form.Group>{" "}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">
                              Warning/Cautionary Marking:{" "}
                            </label>
                            <Form.Group>
                              <Form.Label className="custom-file-input"></Form.Label>
                              <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) =>
                                  setPostData({
                                    ...postData,
                                    WarningOrCautionary_Marking: base64,
                                  })
                                }
                              />
                              {/* <Form.Control  type="file" id="customFile1"/> */}
                            </Form.Group>{" "}
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">Fuse Type: </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="Replaceable"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Fuse_Type: e.target.value,
                                  })
                                }
                                name="b"
                                id="33"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                Replaceable
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="Non-Replaceable"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Fuse_Type: e.target.value,
                                  })
                                }
                                name="b"
                                id="34"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                Non-Replaceable
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="None"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Fuse_Type: e.target.value,
                                  })
                                }
                                name="b"
                                id="35"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                None
                              </Form.Check.Label>
                            </Form.Check>{" "}
                          </div>
                        </div>

                        <div className="col-md-5">
                          <div className="form-group">
                            <label className="form-label">Fuse Marking: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Fuse_Marking}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Fuse_Marking: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-7"></div>
                        <hr />
                        <h3 className="mb-4">Compliance Report: </h3>

                        <div className="col-md-2">
                          <div className="form-group">
                            <label className="form-label"> Report Number</label>
                            <Form.Group className="form-group">
                              <select
                                className="form-select mb-3 shadow-none"
                                value={postData.Report_Number}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Report_Number: e.target.value,
                                  })
                                }
                              >
                                {/* <option defaultValue>Africa</option> */}
                                <option value="No Option">No Option</option>
                              </select>
                            </Form.Group>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Submit"
                      onClick={() => AccountShow("Image")}
                    >
                      Update
                    </button>
                  </fieldset>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UpdatePost;
