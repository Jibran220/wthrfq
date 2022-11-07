import { Row, Col, Form, Image } from "react-bootstrap";
import Card from "./Card";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
import React, { useState, useEffect, useRef } from "react";
import useStyles from "./styles";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import { getRFQ, createRFQ, updateProducts } from "../../actions/userRFQ";
import Base64Downloader from "react-base64-downloader";
import { useNavigate, Link, useParams } from "react-router-dom";
// img

const FormWizard = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    getproductdetail();
  }, []);
  console.log(params);
  console.log(params.id);
  const [rfq_name, Setrfq_name] = useState("");

  const getproductdetail = async () => {
    console.warn(params);
    let result = await fetch(`http://localhost:5005/rfqmanagers/${params.id}`);
    result = await result.json();
    setData(result);
    Setrfq_name(result.name);
    console.log(result.name);
    console.log(data.name);
  };
  let hello = data.name;

  console.log("HHHHHHHHHHHHHHH", data.name);

  // const [postData, setPostData] = useState({
  //   rfq_id: params.id,
  //   rfq_name: "",
  //   Name: "",
  //   Company_Name: "",
  //   Work_Phone: "",
  //   to: "",
  //   from: "",

  //   vendordetails: "",

  //   approver: "",
  //   description: "",
  //   any_other_instructions_for_quoting: "",
  //   statement_for_qualification: "",
  //   status: "",
  // });

  const [rfq_id, Setrfq_id] = useState(params.id);

  const [Name, SetName] = useState("");
  const [Work_Phone, SetWork_Phone] = useState("");
  const [Company_Name, SetCompany_Name] = useState("");
  const [vendordetails, Setvendordetails] = useState("");
  const [approver, Setapprover] = useState("");
  const [description, Setdescription] = useState("");
  const [
    any_other_instructions_for_quoting,
    Setany_other_instructions_for_quoting,
  ] = useState("");
  const [statement_for_qualification, Setstatement_for_qualification] =
    useState("");
  const [to, Setto] = useState("");
  const [status, Setstatus] = useState("Published");
  const [from, Setfrom] = useState("");

  const handleSubmit = async () => {
    // e.preventDefault();
    // dispatch(createRFQ({ Name, Work_Phone, status }));
    // console.warn(Name, Work_Phone, status);
    const result = fetch("http://localhost:5005/userRFQ", {
      method: "post",
      body: JSON.stringify({
        status,
        rfq_id,
        rfq_name,
        Name,
        Work_Phone,
        Company_Name,
        from,
        vendordetails,
        approver,
        description,
        any_other_instructions_for_quoting,
        statement_for_qualification,
        to,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // result = await result.json();
    if (result) {
      toast.info("Vendor is added Succesfully!");

      navigate("/");
    }

  };

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
                <fieldset className={`${show === "A" ? "d-block" : "d-none"}`}>
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
                            value={to}
                            onChange={(e) => {
                              Setto(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">RFQ: </label>

                          <input
                            type="text"
                            className="form-control"
                            disabled
                            name="tovendor"
                            value={rfq_name}
                            onChange={(e) => {
                              Setrfq_name(e.target.value);
                            }}
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
                            disabled
                            value={from}
                            onChange={(e) => {
                              Setfrom(e.target.value);
                            }}
                            placeholder="Admin"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Name: </label>
                          <input
                            type="text"
                            name="Product_Name"
                            className="form-control"
                            value={Name}
                            onChange={(e) => {
                              SetName(e.target.value);
                            }}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Company Name: </label>
                          <input
                            type="text"
                            name="Product_Name"
                            className="form-control"
                            value={Company_Name}
                            onChange={(e) => {
                              SetCompany_Name(e.target.value);
                            }}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Work_Phone: </label>
                          <input
                            type="text"
                            name="Product_Name"
                            className="form-control"
                            value={Work_Phone}
                            onChange={(e) => {
                              SetWork_Phone(e.target.value);
                            }}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Vendor Details:</label>
                          <Form.Group className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              value={vendordetails}
                              onChange={(e) => {
                                Setvendordetails(e.target.value);
                              }}
                            />
                          </Form.Group>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Approver: </label>
                                                        <input type="text" className="form-control" value={postData.approver} onChange={(e) => setPostData({ ...postData, approver: e.target.value })} />
                                                    </div>

                                                </div> */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="form-label">Discription: </label>
                          <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => {
                              Setdescription(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="form-label">
                            Any other Instructions for Quoting
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            value={any_other_instructions_for_quoting}
                            onChange={(e) => {
                              Setany_other_instructions_for_quoting(
                                e.target.value
                              );
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label className="form-label">
                            Statement for Qualification
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            value={statement_for_qualification}
                            onChange={(e) => {
                              Setstatement_for_qualification(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Status: </label>
                          <Form.Group className="form-group">
                            <select
                              className="form-select mb-3 shadow-none"
                              value={status}
                              onChange={(e) => {
                                Setstatus(e.target.value);
                              }}
                            >
                              <option value=" Published">Published</option>
                              <option value=" Draft">Draft</option>
                              <option value=" In Progress">In Progress</option>
                              <option value=" Finished">Finished</option>
                            </select>
                          </Form.Group>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary next action-button float-end"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </fieldset>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <ToastContainer />
    </>
  );
};

export default FormWizard;
