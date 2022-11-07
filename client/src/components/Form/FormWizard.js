import { Row, Col, Form, Image } from "react-bootstrap";
import Card from "./Card";
import emailjs from "@emailjs/browser";

//
import React, { useState, useEffect, useRef } from "react";
import useStyles from "./styles";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import {
  createProducts,
  createexcel,
  updateProducts,
} from "../../actions/products";
import Base64Downloader from "react-base64-downloader";
import { useNavigate, Link } from "react-router-dom";
// img
const FormWizard = () => {
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
  // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();

  // useEffect(() => {
  //     if (post) setPostData(post);
  // }, [post]);

  // const clear = () => {
  //     setCurrentId(0);
  //     setPostData({
  //         Regulatory_Model_Name: '',
  //         Product_Name: '',
  //         Regulatory_Family: '',
  //         Product_Category: '',
  //         Product_Description: '',
  //         Model_Difference: '',
  //         Household: '',
  //         Commercial: '',
  //         Clinical:'',
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
    dispatch(createProducts(postData));
    navigate("/");
    // emailjs
    //   .sendForm(
    //     "service_hr8ymfg",
    //     "template_8rsy4tf",
    //     e.target,
    //     "yYYFFI7AZZOY2R1IU"
    //   )

    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
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
    // <>
    //     <div>
    //         <Row>
    //             <Col sm="12" lg="12">
    //                 <Card>
    //                     <Card.Header className="d-flex justify-content-between">
    //                         <div className="header-title">
    //                             <h4 className="card-title">Simple Wizard</h4>
    //                         </div>
    //                     </Card.Header>
    //                     <Card.Body>
    //                         <Form id="form-wizard1" className="text-center mt-3" onSubmit={handleSubmit}>
    //                             <ul id="top-tab-list" className="p-0 row list-inline">
    //                                 <li className={` ${show === 'Image' ? ' active done' : ''} ${show === 'Personal' ? ' active done' : ''} ${show === 'Account' ? ' active done' : ''} ${show === 'A' ? 'active' : ''} col-lg-3 col-md-6 text-start mb-2 active`} id="account">
    //                                     <Link to="#">
    //                                         <div className="iq-icon me-3">
    //                                             <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
    //                                             </svg>
    //                                         </div>
    //                                         <span>Product Information</span>
    //                                     </Link>
    //                                 </li>
    //                                 <li id="personal" className={`${show === 'Personal' ? ' active done' : ''} ${show === 'Image' ? ' active done' : ''} ${show === 'Account' ? 'active ' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
    //                                     <Link to="#">
    //                                         <div className="iq-icon me-3">
    //                                             <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    //                                             </svg>
    //                                         </div>
    //                                         <span > Product Technical Information</span>
    //                                     </Link>
    //                                 </li>
    //                                 <li id="payment" className={`${show === 'Image' ? ' active done' : ''} ${show === 'Personal' ? 'active' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
    //                                     <Link to="#">
    //                                         <div className="iq-icon me-3">
    //                                             <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    //                                             </svg>
    //                                         </div>
    //                                         <span>Product Enivoromental Information</span>
    //                                     </Link>
    //                                 </li>
    //                                 <li id="confirm" className={`${show === 'Image' ? ' active ' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
    //                                     <Link to="#">
    //                                         <div className="iq-icon me-3">
    //                                             <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    //                                             </svg>
    //                                         </div>
    //                                         <span>Marketing and Documentation</span>
    //                                     </Link>
    //                                 </li>
    //                             </ul>
    //                             <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
    //                                 <div className="form-card text-start">
    //                                     <div className="row">
    //                                         <div className="col-7">
    //                                             <h3 className="mb-4">Account Information: </h3>
    //                                         </div>
    //                                         <div className="col-5">
    //                                             <h2 className="steps">Step 1 - 4</h2>
    //                                         </div>
    //                                     </div>
    //                                     <div className="row">
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Regulatory Model Name: </label>
    //                                                 <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value })} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Product Name: *</label>
    //                                                 <input type="text" name="Product_Name" className="form-control" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value })} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Regulatory Family: *</label>
    //                                                 <input type="text" className="form-control" value={postData.Regulatory_Family} onChange={(e) => setPostData({ ...postData, Regulatory_Family: e.target.value })} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Product Category: *</label>
    //                                                 <Form.Group className="form-group">
    //                                                     <select className="form-select mb-3 shadow-none" value={postData.Product_Category} onChange={(e) => setPostData({ ...postData, Product_Category: e.target.value })}>
    //                                                         <option defaultValue>BATT</option>
    //                                                         <option value="CABL">CABL</option>
    //                                                         <option value="CAP">CAP</option>
    //                                                         <option value="CONT">CONT</option>
    //                                                         <option value="CYBR">CYBR</option>
    //                                                         <option value="E3">E3</option>
    //                                                         <option value="ELVH">ELVH</option>
    //                                                     </select>
    //                                                 </Form.Group>
    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Product Description / Intended Use: </label>
    //                                                 <input type="text" className="form-control" value={postData.Product_Description} onChange={(e) => setPostData({ ...postData, Product_Description: e.target.value })} />
    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Model Difference (if applicable): </label>
    //                                                 <input type="text" className="form-control" value={postData.Model_Difference} onChange={(e) => setPostData({ ...postData, Model_Difference: e.target.value })} />
    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Intended Environment: *</label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" value='Household' onChange={(e) => setPostData({ ...postData, Household: e.target.value })} name="a2" id="flexRadioDefault1" />

    //                                                     {/* <Form.Check.Input className="me-2"   type="checkbox" checked={postData.Household} onChange={(e) => setPostData({ ...postData, Household: e.target.checked })}  id="flexCheckDefault"/> */}
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Household
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Commercial} onChange={(e) => setPostData({ ...postData, Commercial: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Commercial
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Clinical} onChange={(e) => setPostData({ ...postData, Clinical: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Clinical
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Applicable Standards: *</label>
    //                                                 <Form.Group className="form-group">
    //                                                     <select className="form-select mb-3 shadow-none" value={postData.Applicable_Standards} onChange={(e) => setPostData({ ...postData, Applicable_Standards: e.target.value })}>
    //                                                         <option defaultValue>IEC 60086-1:2015</option>
    //                                                         <option value="IEC 60086-1:2015">IEC 60086-1:2015</option>
    //                                                         <option value="IEC 60086-2:2015">IEC 60086-2:2015</option>
    //                                                         <option value="IEC 60086-1:2015">IEC 60086-1:2015</option>
    //                                                         <option value="IEC 60086-2:2015">IEC 60086-2:2015</option>
    //                                                         <option value="IEC 60086-3:2015">IEC 60086-3:2015</option>
    //                                                         <option value="IEC 60086-4:2015">IEC 60086-4:2015</option>
    //                                                         <option value="IEC 60086-4:2015">IEC 60086-4:2015</option>

    //                                                     </select>
    //                                                 </Form.Group>                                                </div>

    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Applicant Name and Address: </label>
    //                                                 <input type="text" className="form-control" value={postData.Applicant_Name_and_Address} onChange={(e) => setPostData({ ...postData, Applicant_Name_and_Address: e.target.value })} />
    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">TradeMark: </label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='Yes' onChange={(e) => setPostData({ ...postData, TradeMark: e.target.value })} name="c" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         Yes
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='No' onChange={(e) => setPostData({ ...postData, TradeMark: e.target.value })} name="c" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         No
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                             </div>
    //                                         </div>

    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Family/Series Model: </label>
    //                                                 <input type="text" className="form-control" value={postData.Family} onChange={(e) => setPostData({ ...postData, Family: e.target.value })} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Market: </label>
    //                                                 <Form.Group className="form-group">
    //                                                     <select className="form-select mb-3 shadow-none" value={postData.Market} onChange={(e) => setPostData({ ...postData, Market: e.target.value })} >
    //                                                         <option defaultValue>Africa</option>
    //                                                         <option value="Ageria">Ageria</option>
    //                                                         <option value="Angola">Angola</option>
    //                                                         <option value="Benin">Benin</option>
    //                                                         <option value="Botswana">Botswana</option>
    //                                                         <option value="Burkina Faso">Burkina Faso</option>
    //                                                     </select>
    //                                                 </Form.Group>                                                </div>

    //                                         </div>
    //                                         {/* <div className="col-md-3">

    //                                     <Form.Check className="d-block">
    //                                 <Form.Check.Input className="me-2"  type="radio" value='Yes' onChange={(e) => setPostData({ ...postData, TradeMark: e.target.value })} name="flexRadioDefault" id="flexRadioDefault1"/>
    //                                 <Form.Check.Label  htmlFor="flexRadioDefault1">
    //                                     Default radio
    //                                 </Form.Check.Label>
    //                             </Form.Check>
    //                             <Form.Check className="d-block">
    //                                 <Form.Check.Input className="me-2"  type="radio" value='Yes' onChange={(e) => setPostData({ ...postData, TradeMark: e.target.value })} name="flexRadioDefault" id="flexRadioDefault1"/>
    //                                 <Form.Check.Label  htmlFor="flexRadioDefault1">
    //                                     Default radio
    //                                 </Form.Check.Label>
    //                             </Form.Check>
    //                                     </div> */}

    //                                     </div>
    //                                 </div>
    //                                 <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Account')} >Next</button>
    //                             </fieldset>
    //                             <fieldset className={`${show === 'Account' ? 'd-block' : 'd-none'}`}>
    //                                 <div className="form-card text-start">
    //                                     <div className="row">
    //                                         <div className="col-7">
    //                                             <h3 className="mb-4">Personal Information:</h3>
    //                                         </div>
    //                                         <div className="col-5">
    //                                             <h2 className="steps">Step 2 - 4</h2>
    //                                         </div>
    //                                     </div>
    //                                     <div className="row">
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Overall Size of Equipment </label>
    //                                                 <input type="text" className="form-control" name="fname" placeholder='Enter Size' value={postData.Overall_Size_of_Equipment} onChange={(e) => setPostData({ ...postData, Overall_Size_of_Equipment: e.target.value })} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-2">
    //                                             <div className="form-group">
    //                                                 <label className="form-label"> (W x D x H)</label>
    //                                                 <Form.Group className="form-group">
    //                                                     <select className="form-select mb-3 shadow-none" value={postData.WebGLShader} onChange={(e) => setPostData({ ...postData, WebGLShader: e.target.value })} >
    //                                                         {/* <option defaultValue>Africa</option> */}
    //                                                         <option value="mm">mm</option>
    //                                                         <option value="cm">cm</option>
    //                                                         <option value="mtr">mtr</option>
    //                                                     </select>
    //                                                 </Form.Group>                                                 </div>
    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Power Rating/Electrical Rating </label>
    //                                                 <input type="number" className="form-control" name="phno" value={postData.Voltage} onChange={(e) => setPostData({ ...postData, Voltage: e.target.value })} placeholder='Voltage' />
    //                                                 <input type="number" className="form-control" name="phno" value={postData.Phase} onChange={(e) => setPostData({ ...postData, Phase: e.target.value })} placeholder='Phase' />
    //                                                 <input type="number" className="form-control" name="phno" value={postData.Frequency} onChange={(e) => setPostData({ ...postData, Frequency: e.target.value })} placeholder='Frequency' />
    //                                                 <input type="number" className="form-control" name="phno" value={postData.Power} onChange={(e) => setPostData({ ...postData, Power: e.target.value })} placeholder='PowerCurrent' />
    //                                                 <input type="number" className="form-control" name="phno" value={postData.Current} onChange={(e) => setPostData({ ...postData, Current: e.target.value })} placeholder='Current' />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-4">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Operation Mode: </label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='Continuos' onChange={(e) => setPostData({ ...postData, Operation_Mode: e.target.value })} name="1" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         Continuos

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='  Duty Cycle' onChange={(e) => setPostData({ ...postData, Operation_Mode: e.target.value })} name="1" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         Duty Cycle
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>                                                </div>
    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Classification of use by</label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Ordinary_person} onChange={(e) => setPostData({ ...postData, Ordinary_person: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Ordinary person
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Children_likely_present} onChange={(e) => setPostData({ ...postData, Children_likely_present: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Children likely present
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Instructed_person} onChange={(e) => setPostData({ ...postData, Instructed_person: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Instructed person
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Skilled_person} onChange={(e) => setPostData({ ...postData, Skilled_person: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Skilled person                                        </Form.Check.Label>
    //                                                 </Form.Check>                                            </div>
    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Supply Connection</label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.AC_mains} onChange={(e) => setPostData({ ...postData, AC_mains: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         AC mains
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.DC_mains} onChange={(e) => setPostData({ ...postData, DC_mains: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         DC mains
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Battery_Powered} onChange={(e) => setPostData({ ...postData, Battery_Powered: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Battery Powered
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label"><b>Supply Connection - Type</b> </label>
    //                                                 <label className="form-label"><i>Pluggable equipment type A</i></label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Non_detachable_Supply_Cord} onChange={(e) => setPostData({ ...postData, Non_detachable_Supply_Cord: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Non-detachable Supply Cord
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Appliance_Coupler} onChange={(e) => setPostData({ ...postData, Appliance_Coupler: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Appliance Coupler
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Direct_plug_in} onChange={(e) => setPostData({ ...postData, Direct_plug_in: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Direct plug-in
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label"><b>Supply Connection - Type</b></label>
    //                                                 <label className="form-label"><i>Pluggable equipment type B</i></label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Non_detachable_Supply_Cord_B} onChange={(e) => setPostData({ ...postData, Non_detachable_Supply_Cord_B: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Non-detachable Supply Cord B                                        </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Appliance_Coupler_B} onChange={(e) => setPostData({ ...postData, Non_detachable_Supply_Cord_B: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Appliance Coupler B
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>

    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Other types</label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Permanent_connection} onChange={(e) => setPostData({ ...postData, Permanent_connection: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Permanent connection
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Mating_connector} onChange={(e) => setPostData({ ...postData, Mating_connector: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Mating connector

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>

    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Equipment Mobility</label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Movable} onChange={(e) => setPostData({ ...postData, Movable: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Movable

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Transportable} onChange={(e) => setPostData({ ...postData, Transportable: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Transportable

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>

    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Stationary_for_building_in} onChange={(e) => setPostData({ ...postData, Stationary_for_building_in: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Stationary for building-in

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Wall_ceiling_mounted_SRME_rack_mounted} onChange={(e) => setPostData({ ...postData, Wall_ceiling_mounted_SRME_rack_mounted: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Wall/ceiling-mounted SRME/rack-mounted

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Hand_held} onChange={(e) => setPostData({ ...postData, Hand_held: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Hand-held

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>

    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                                 <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Personal')} >Next</button>
    //                                 <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-1" value="Previous" onClick={() => AccountShow('A')} >Previous</button>
    //                             </fieldset>
    //                             <fieldset className={`${show === 'Personal' ? 'd-block' : 'd-none'}`}>
    //                                 <div className="form-card text-start">
    //                                     <div className="row">
    //                                         <div className="col-7">
    //                                             <h3 className="mb-4">Enviromental Information: </h3>
    //                                         </div>
    //                                         <div className="col-5">
    //                                             <h2 className="steps">Step 3 - 4</h2>
    //                                         </div>
    //                                     </div>
    //                                     <div className="row">
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Pollution Degree: </label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='P1' onChange={(e) => setPostData({ ...postData, Pollution_Degree: e.target.value })} name="a" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         P1
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='P2' onChange={(e) => setPostData({ ...postData, Pollution_Degree: e.target.value })} name="a" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         P2
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='P3' onChange={(e) => setPostData({ ...postData, Pollution_Degree: e.target.value })} name="a" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         P3
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>                                              </div>
    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Manufacturer Specific Max Operating Ambient: *</label>
    //                                                 <input type="number" className="form-control" value={postData.Manufacturer_Specific_Max_Operating_Ambient} onChange={(e) => setPostData({ ...postData, Manufacturer_Specific_Max_Operating_Ambient: e.target.value })} placeholder='in *C' />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Ingree Protection Classification: </label>
    //                                                 <input type="text" className="form-control" value={postData.Ingree_Protection_Classification} onChange={(e) => setPostData({ ...postData, Ingree_Protection_Classification: e.target.value })} />
    //                                             </div>
    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Altitude During Operation: </label>
    //                                                 <input type="text" className="form-control" value={postData.Altitude_During_Operation} onChange={(e) => setPostData({ ...postData, Altitude_During_Operation: e.target.value })} />

    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-6">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Mass Of Equipment (in kg): </label>
    //                                                 <input type="number" className="form-control" value={postData.Mass_Of_Equipment} onChange={(e) => setPostData({ ...postData, Mass_Of_Equipment: e.target.value })} />
    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Relative Humidity (%): </label>
    //                                                 <input type="text" className="form-control" value={postData.Relative_Humidity} onChange={(e) => setPostData({ ...postData, Relative_Humidity: e.target.value })} />
    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Atmospheric Pressure [kPa]: </label>
    //                                                 <input type="text" className="form-control" value={postData.Atmospheric_Pressure} onChange={(e) => setPostData({ ...postData, Atmospheric_Pressure: e.target.value })} />
    //                                             </div>

    //                                         </div>
    //                                         <div className="col-md-3">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Indoor or Outdoor: </label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Indoor} onChange={(e) => setPostData({ ...postData, Indoor: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Indoor
    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="checkbox" checked={postData.Outdoor} onChange={(e) => setPostData({ ...postData, Outdoor: e.target.checked })} id="flexCheckDefault" />
    //                                                     <Form.Check.Label htmlFor="flexCheckDefault">
    //                                                         Outdoor

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>

    //                                             </div>

    //                                         </div>

    //                                     </div>
    //                                 </div>
    //                                 <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Submit" onClick={() => AccountShow('Image')} >Next</button>
    //                                 <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-1" value="Previous" onClick={() => AccountShow('Account')} >Previous</button>
    //                             </fieldset>
    //                             {/* <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
    //                                 <div className="form-card">
    //                                     <div className="row">
    //                                     <div className="col-7">
    //                                         <h3 className="mb-4 text-left">Marketing and Documentation:</h3>
    //                                    </div>
    //                                     <div className="col-5">
    //                                         <h2 className="steps">Step 4 - 4</h2>
    //                                     </div>
    //                                     </div>
    //                                     <div className="row">
    //                                     <div className="col-md-6">
    //                                         <div className="form-group">
    //                                             <label className="form-label">Regulatory Family: *</label>
    //                                             <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value })}  />
    //                                         </div>
    //                                     </div>
    //                                     <div className="col-md-6">
    //                                         <div className="form-group">
    //                                             <label className="form-label">Regulatory Family: *</label>
    //                                             <input type="text" className="form-control" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value })}  />
    //                                         </div>
    //                                     </div>
    //                                     </div>
    //                                     </div>

    //                                 <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Submit" onClick={() => AccountShow('Image')} >Submit</button>
    //                             </fieldset> */}
    //                             <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
    //                                 <div className="form-card text-start">
    //                                     <div className="row">
    //                                         <div className="col-7">
    //                                             <h3 className="mb-4">Marketing And Documentation: </h3>
    //                                         </div>
    //                                         <div className="col-5">
    //                                             <h2 className="steps">Step 4 - 4</h2>
    //                                         </div>
    //                                     </div>
    //                                     <div className="row">
    //                                         <div className="col-md-4">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Copy of Marking Plate: </label>
    //                                                 <Form.Group>
    //                                                     <Form.Label className="custom-file-input"></Form.Label>
    //                                                     <FileBase type="file" multiple={''} onDone={({ base64 }) => setPostData({ ...postData, Copy_of_Marking_Plate: base64 })} />

    //                                                     {/* <Form.Control  type="file" id="customFile1"/> */}
    //                                                 </Form.Group>                                                </div>
    //                                         </div>
    //                                         <div className="col-md-4">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Warning/Cautionary Marking: </label>
    //                                                 <Form.Group>
    //                                                     <Form.Label className="custom-file-input"></Form.Label>
    //                                                     <FileBase type="file" multiple={''} onDone={({ base64 }) => setPostData({ ...postData, WarningOrCautionary_Marking: base64 })} />
    //                                                     {/* <Form.Control  type="file" id="customFile1"/> */}
    //                                                 </Form.Group>                                                  </div>
    //                                         </div>
    //                                         <div className="col-md-4">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Fuse Type: </label>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='Replaceable' onChange={(e) => setPostData({ ...postData, Fuse_Type: e.target.value })} name="b" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         Replaceable

    //                                                     </Form.Check.Label>
    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='Non-Replaceable' onChange={(e) => setPostData({ ...postData, Fuse_Type: e.target.value })} name="b" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         Non-Replaceable

    //                                                     </Form.Check.Label>

    //                                                 </Form.Check>
    //                                                 <Form.Check className="d-block">
    //                                                     <Form.Check.Input className="me-2" type="radio" value='None' onChange={(e) => setPostData({ ...postData, Fuse_Type: e.target.value })} name="b" id="flexRadioDefault1" />
    //                                                     <Form.Check.Label htmlFor="flexRadioDefault1">
    //                                                         None

    //                                                     </Form.Check.Label>

    //                                                 </Form.Check>                                          </div>
    //                                         </div>

    //                                         <div className="col-md-5">
    //                                             <div className="form-group">
    //                                                 <label className="form-label">Fuse Marking: </label>
    //                                                 <input type="text" className="form-control" value={postData.Fuse_Marking} onChange={(e) => setPostData({ ...postData, Fuse_Marking: e.target.value })} />
    //                                             </div>
    //                                         </div>

    //                                         <div className="col-7">
    //                                         </div>
    //                                         <hr />
    //                                         <h3 className="mb-4">Compliance Report: </h3>

    //                                         <div className="col-md-2">
    //                                             <div className="form-group">
    //                                                 <label className="form-label"> Report Number</label>
    //                                                 <Form.Group className="form-group">
    //                                                     <select className="form-select mb-3 shadow-none" value={postData.Report_Number} onChange={(e) => setPostData({ ...postData, Report_Number: e.target.value })} >
    //                                                         {/* <option defaultValue>Africa</option> */}
    //                                                         <option value="No Option">No Option</option>

    //                                                     </select>
    //                                                 </Form.Group>                                                 </div>
    //                                         </div>

    //                                     </div>
    //                                 </div>
    //                                 <button type="submit" name="next" className="btn btn-primary next action-button float-end" value="Submit" onClick={() => AccountShow('Image')} >Submit</button>
    //                             </fieldset>
    //                         </Form>
    //                         <hr />
    //                         <hr />
    //                         <hr />
    //                         <br /><br />
    //                         <br /><br />

    //                     </Card.Body>
    //                 </Card>
    //             </Col>
    //         </Row>
    //     </div>
    // </>
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
                  <fieldset
                    className={`${show === "A" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Account Information: </h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 1 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Regulatory Model Name:{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Regulatory_Model_Name}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Regulatory_Model_Name: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Product Name: *
                            </label>
                            <input
                              type="text"
                              name="Product_Name"
                              className="form-control"
                              value={postData.Product_Name}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Product_Name: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Regulatory Family: *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Regulatory_Family}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Regulatory_Family: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Product Category: *
                            </label>
                            <Form.Group className="form-group">
                              <select
                                className="form-select mb-3 shadow-none"
                                value={postData.Product_Category}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Product_Category: e.target.value,
                                  })
                                }
                              >
                                <option defaultValue>BATT</option>
                                <option value="CABL">CABL</option>
                                <option value="CAP">CAP</option>
                                <option value="CONT">CONT</option>
                                <option value="CYBR">CYBR</option>
                                <option value="E3">E3</option>
                                <option value="ELVH">ELVH</option>
                              </select>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Product Description / Intended Use:{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Product_Description}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Product_Description: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Model Difference (if applicable):{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Model_Difference}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Model_Difference: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Intended Environment: *
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Household"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Household: e.target.value,
                                  })
                                }
                                name="a2"
                                id="flexRadioDefault1"
                              />

                              {/* <Form.Check.Input className="me-2"   type="checkbox" value="Household} onChange={(e) => setPostData({ ...postData, Household: e.target.value })}  id="flexCheckDefault"/> */}
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Household
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Commercial"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Commercial: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Commercial
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Clinical"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Clinical: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Clinical
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Applicable Standards: *
                            </label>
                            <Form.Group className="form-group">
                              <select
                                className="form-select mb-3 shadow-none"
                                value={postData.Applicable_Standards}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Applicable_Standards: e.target.value,
                                  })
                                }
                              >
                                <option defaultValue>IEC 60086-1:2015</option>
                                <option value="IEC 60086-1:2015">
                                  IEC 60086-1:2015
                                </option>
                                <option value="IEC 60086-2:2015">
                                  IEC 60086-2:2015
                                </option>
                                <option value="IEC 60086-1:2015">
                                  IEC 60086-1:2015
                                </option>
                                <option value="IEC 60086-2:2015">
                                  IEC 60086-2:2015
                                </option>
                                <option value="IEC 60086-3:2015">
                                  IEC 60086-3:2015
                                </option>
                                <option value="IEC 60086-4:2015">
                                  IEC 60086-4:2015
                                </option>
                                <option value="IEC 60086-4:2015">
                                  IEC 60086-4:2015
                                </option>
                              </select>
                            </Form.Group>{" "}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Applicant Name and Address:{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Applicant_Name_and_Address}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Applicant_Name_and_Address: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">TradeMark: </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="Yes"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    TradeMark: e.target.value,
                                  })
                                }
                                name="c"
                                id="flexRadioDefault1"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                Yes
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="No"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    TradeMark: e.target.value,
                                  })
                                }
                                name="c"
                                id="flexRadioDefault1"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                No
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>

                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Family/Series Model:{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={postData.Family}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Family: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">Market: </label>
                            <Form.Group className="form-group">
                              <select
                                className="form-select mb-3 shadow-none"
                                value={postData.Market}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Market: e.target.value,
                                  })
                                }
                              >
                                <option defaultValue>Africa</option>
                                <option value="Ageria">Ageria</option>
                                <option value="Angola">Angola</option>
                                <option value="Benin">Benin</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Burkina Faso">
                                  Burkina Faso
                                </option>
                              </select>
                            </Form.Group>{" "}
                          </div>
                        </div>
                        {/* <div className="col-md-3">
                                                
                                            <Form.Check className="d-block">
                                        <Form.Check.Input className="me-2"  type="radio" value='Yes' onChange={(e) => setPostData({ ...postData, TradeMark: e.target.value })} name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <Form.Check.Label  htmlFor="flexRadioDefault1">
                                            Default radio
                                        </Form.Check.Label>
                                    </Form.Check>
                                    <Form.Check className="d-block">
                                        <Form.Check.Input className="me-2"  type="radio" value='Yes' onChange={(e) => setPostData({ ...postData, TradeMark: e.target.value })} name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <Form.Check.Label  htmlFor="flexRadioDefault1">
                                            Default radio
                                        </Form.Check.Label>
                                    </Form.Check>
                                            </div> */}
                      </div>
                    </div>
                    <button
                      type="button"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Next"
                      onClick={() => AccountShow("Account")}
                    >
                      Next
                    </button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Account" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Personal Information:</h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Step 2 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Overall Size of Equipment{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="fname"
                              placeholder="Enter Size"
                              value={postData.Overall_Size_of_Equipment}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Overall_Size_of_Equipment: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group">
                            <label className="form-label"> (W x D x H)</label>
                            <Form.Group className="form-group">
                              <select
                                className="form-select mb-3 shadow-none"
                                value={postData.WebGLShader}
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    WebGLShader: e.target.value,
                                  })
                                }
                              >
                                {/* <option defaultValue>Africa</option> */}
                                <option value="mm">mm</option>
                                <option value="cm">cm</option>
                                <option value="mtr">mtr</option>
                              </select>
                            </Form.Group>{" "}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Power Rating/Electrical Rating{" "}
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              name="phno"
                              value={postData.Voltage}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Voltage: e.target.value,
                                })
                              }
                              placeholder="Voltage"
                            />
                            <input
                              type="number"
                              className="form-control"
                              name="phno"
                              value={postData.Phase}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Phase: e.target.value,
                                })
                              }
                              placeholder="Phase"
                            />
                            <input
                              type="number"
                              className="form-control"
                              name="phno"
                              value={postData.Frequency}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Frequency: e.target.value,
                                })
                              }
                              placeholder="Frequency"
                            />
                            <input
                              type="number"
                              className="form-control"
                              name="phno"
                              value={postData.Power}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Power: e.target.value,
                                })
                              }
                              placeholder="PowerCurrent"
                            />
                            <input
                              type="number"
                              className="form-control"
                              name="phno"
                              value={postData.Current}
                              onChange={(e) =>
                                setPostData({
                                  ...postData,
                                  Current: e.target.value,
                                })
                              }
                              placeholder="Current"
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">
                              Operation Mode:{" "}
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="Continuos"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Operation_Mode: e.target.value,
                                  })
                                }
                                name="1"
                                id="flexRadioDefault1"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                Continuos
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="radio"
                                value="  Duty Cycle"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Operation_Mode: e.target.value,
                                  })
                                }
                                name="1"
                                id="flexRadioDefault1"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                Duty Cycle
                              </Form.Check.Label>
                            </Form.Check>{" "}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Classification of use by
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Ordinary_person"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Ordinary_person: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Ordinary person
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Children_likely_present"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Children_likely_present: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Children likely present
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Instructed_person"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Instructed_person: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Instructed person
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Skilled_person"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Skilled_person: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Skilled person{" "}
                              </Form.Check.Label>
                            </Form.Check>{" "}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Supply Connection
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="AC_mains"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    AC_mains: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                AC mains
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="DC_mains"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    DC_mains: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                DC mains
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Battery_Powered"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Battery_Powered: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Battery Powered
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              <b>Supply Connection - Type</b>{" "}
                            </label>
                            <label className="form-label">
                              <i>Pluggable equipment type A</i>
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Non_detachable_Supply_Cord"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Non_detachable_Supply_Cord: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Non-detachable Supply Cord
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Appliance_Coupler"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Appliance_Coupler: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Appliance Coupler
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Direct_plug_in"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Direct_plug_in: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Direct plug-in
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              <b>Supply Connection - Type</b>
                            </label>
                            <label className="form-label">
                              <i>Pluggable equipment type B</i>
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Non_detachable_Supply_Cord_B"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Non_detachable_Supply_Cord_B:
                                      e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Non-detachable Supply Cord B{" "}
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Appliance_Coupler_B"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Non_detachable_Supply_Cord_B:
                                      e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Appliance Coupler B
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">Other types</label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Permanent_connection"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Permanent_connection: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Permanent connection
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Mating_connector"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Mating_connector: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Mating connector
                              </Form.Check.Label>
                            </Form.Check>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Equipment Mobility
                            </label>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Movable"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Movable: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Movable
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Transportable"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Transportable: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Transportable
                              </Form.Check.Label>
                            </Form.Check>

                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Stationary_for_building_in"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Stationary_for_building_in: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Stationary for building-in
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Wall_ceiling_mounted_SRME_rack_mounted"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Wall_ceiling_mounted_SRME_rack_mounted:
                                      e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Wall/ceiling-mounted SRME/rack-mounted
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Hand_held"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Hand_held: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Hand-held
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
                      value="Next"
                      onClick={() => AccountShow("Personal")}
                    >
                      Next
                    </button>
                    <button
                      type="button"
                      name="previous"
                      className="btn btn-dark previous action-button-previous float-end me-1"
                      value="Previous"
                      onClick={() => AccountShow("A")}
                    >
                      Previous
                    </button>
                  </fieldset>
                  <fieldset
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
                                id="flexRadioDefault1"
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
                                id="flexRadioDefault1"
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
                                id="flexRadioDefault1"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                P3
                              </Form.Check.Label>
                            </Form.Check>{" "}
                          </div>
                        </div>
                        <div className="col-md-4">
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
                        <div className="col-md-3">
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
                        <div className="col-md-3">
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
                        <div className="col-md-3">
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
                                value="Indoor"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Indoor: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
                              />
                              <Form.Check.Label htmlFor="flexCheckDefault">
                                Indoor
                              </Form.Check.Label>
                            </Form.Check>
                            <Form.Check className="d-block">
                              <Form.Check.Input
                                className="me-2"
                                type="checkbox"
                                value="Outdoor"
                                onChange={(e) =>
                                  setPostData({
                                    ...postData,
                                    Outdoor: e.target.value,
                                  })
                                }
                                id="flexCheckDefault"
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
                  </fieldset>
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
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Copy of Marking Plate:{" "}
                            </label>
                            <Form.Group>
                              <Form.Label className="custom-file-input"></Form.Label>
                              <FileBase
                                type="file"
                                multiple={""}
                                onDone={({ base64 }) =>
                                  setPostData({
                                    ...postData,
                                    Copy_of_Marking_Plate: base64,
                                  })
                                }
                                name="abc"
                              />

                              {/* <Form.Control  type="file" id="customFile1"/> */}
                            </Form.Group>{" "}
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="form-label">
                              Warning/Cautionary Marking:{" "}
                            </label>
                            <Form.Group>
                              <Form.Label className="custom-file-input"></Form.Label>
                              <FileBase
                                type="file"
                                multiple={""}
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
                        <div className="col-md-3">
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
                                id="flexRadioDefault1"
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
                                id="flexRadioDefault1"
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
                                id="flexRadioDefault1"
                              />
                              <Form.Check.Label htmlFor="flexRadioDefault1">
                                None
                              </Form.Check.Label>
                            </Form.Check>{" "}
                          </div>
                        </div>

                        <div className="col-md-3">
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
                      Submit
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

export default FormWizard;
