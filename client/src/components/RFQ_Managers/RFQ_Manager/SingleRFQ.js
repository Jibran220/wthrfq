import { Row, Col, Form, Image } from "react-bootstrap";
import Card from "../../../Card";

//
import React, { useState, useEffect } from "react";
import useStyles from "./styles";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { updateProducts } from "../../../actions/RFQ_Manager";
import Base64Downloader from "react-base64-downloader";
import { useNavigate, Link, useParams } from "react-router-dom";
// img
const SingleRFQ = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    to: "",
    from: "",
    Dates: "",
    vendordetails: "",

    approver: "",
    description: "",
    any_other_instructions_for_quoting: "",
    statement_for_qualification: "",
    status: "",
    file: "",
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
    let result = await fetch(`http://localhost:5005/rfqmanagers/${params.id}`);

    result = await result.json();
    console.warn(result);
    // setPostData({ Product_Name: (result.Product_Name) })
    // setPostData({ Product_Name: (result.    ) })
    setPostData({ from: result.from });
    setPostData({ file: result.file });

    setPostData({ Dates: result.Dates });
    setPostData({ vendordetails: result.vendordetails });
    setPostData({ approver: result.approver });
    setPostData({ description: result.description });
    setPostData({
      any_other_instructions_for_quoting:
        result.any_other_instructions_for_quoting,
    });
    setPostData({
      statement_for_qualification: result.statement_for_qualification,
    });
    setPostData({ status: result.status });
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
                  <h4 className="card-title"></h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Form
                  id="form-wizard1"
                  className="text-center mt-3"
                  onSubmit={handleSubmit}
                >
                  <fieldset
                    className={`${show === "A" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4"> </h3>
                        </div>
                        <div className="col-5"></div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">To: </label>
                            <input
                              type="text"
                              className="form-control"
                              name="tovendor"
                              value={postData.to}
                              onChange={(e) =>
                                setPostData({ ...postData, to: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">From: </label>
                            <input
                              type="text"
                              name="Product_Name"
                              className="form-control"
                              value={postData.from}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  from: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Date:</label>
                            <input
                              type="date"
                              className="form-control"
                              value={postData.Dates}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Dates: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Approver: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.approver}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  approver: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">Discription: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.description}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  description: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">File</label>

                            <FileBase
                              type="file"
                              multiple={""}
                              onDone={({ base64 }) =>
                                setPostData({ ...postData, file: base64 })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Status: </label>
                            <Form.Group className="form-group">
                              <select
                                className="form-select mb-3 shadow-none"
                                value={postData.status}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    status: e.target.value,
                                  })
                                }
                              >
                                <option value=" Published">Published</option>
                                <option value=" Draft">Draft</option>
                                <option value=" In Progress">
                                  In Progress
                                </option>
                                <option value=" Finished">Finished</option>
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
                <hr />
                <hr />
                <hr />
                <br />
                <br />
                <br />
                <br />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SingleRFQ;
