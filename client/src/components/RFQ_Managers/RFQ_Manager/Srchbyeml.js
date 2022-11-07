import { Row, Col, Form, Image } from "react-bootstrap";
import Card from "../../../Card";

//
import useStyles from "./styles";
import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../../../utils/APIRoutes";
// import ChatContainer from "../components/ChatContainer";
import ChatContainer from "../../../components/ChatContainer";
import Contacts from "../../../components/Contacts";
import Welcome from "../../../components/Welcome";

import { TextField, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { Modal, Button } from "react-bootstrap";
import { updateProducts } from "../../../actions/RFQ_Manager";
import Base64Downloader from "react-base64-downloader";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import decode from "jwt-decode";
// img
const Srchbyeml = ({ currentId, setCurrentId }) => {
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
  const [isShow, invokeModal] = React.useState(false);
  const initModal = () => {
    return invokeModal(!false);
  };
  //     const [postData, setPostData] = useState({
  //  to: '',
  //         from: '',
  //         Dates: '',
  //         vendordetails: '',

  //         approver: '',
  //         description: '',
  //         any_other_instructions_for_quoting: '',
  //         statement_for_qualification: '',
  //         status: '',
  //         file:'',

  //     });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(contacts);
  console.log("current_chat", contacts);
  const params = useParams();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
  );
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(user);
  const [userName, setUserName] = useState("");
  //   useEffect(async () => {
  //     setUserName(
  //       await JSON.parse(
  //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //       ).email
  //     );
  //   }, []);
  console.log("the new env username is : ", userName);
  console.log("the new env user is : ", user);
  console.log("the new env user is : ", user.email);
  console.log("thi is current user : ", currentUser);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  //    useEffect(async () => {
  //     if (currentUser) {
  //       if (currentUser.isAvatarImageSet) {
  //         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
  //         setContacts(data.data);
  //       } else {
  //        setava
  //       }
  //     }
  //   }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
    console.log("current_chat", chat);
  };
  //     useEffect(() => {
  //       getproductdetailbyemail()
  //     },[]);
  //     const getproductdetailbyemail=async()=>{
  //         console.warn(params)
  //         let result=await fetch (`http://localhost:5005/rfqmanagers/search/"muhammadjibran890@gmail.com"`)

  //         result =await result.json()
  //         console.warn(result)
  //         // setPostData({ Product_Name: (result.Product_Name) })
  //         // setPostData({ Product_Name: (result.    ) })
  //         setPostData({ from: (result.from) })
  //        setPostData({  file: (result. file   ) })

  //         setPostData({ Dates: (result.Dates  ) })
  //         setPostData({ vendordetails: (result. vendordetails   ) })
  //         setPostData({ approver: (result.  approver  ) })
  //        setPostData({  description: (result.  description  ) })
  //        setPostData({  any_other_instructions_for_quoting: (result. any_other_instructions_for_quoting   ) })
  //        setPostData({  statement_for_qualification: (result. statement_for_qualification   ) })
  //        setPostData({  status: (result. status   ) })

  // }

  const [data, setData] = useState([]);

  //      useEffect(async () => {
  //     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //       navigate("/login");
  //     } else {
  //       setCurrentUser(
  //         await JSON.parse(
  //           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //         )
  //       );
  //     }
  //   }, []);
  useEffect(() => {
    //  if (post) setPostData(post);
    // getproductdetail()
    getproducts();
    console.log("the new env username is : ", userName);
    console.log("the new env user is : ", user);
    console.log("the new env user is : ", user.email);
    //   const token = user?.token;

    //  if (token) {
    //    const decodedToken = decode(token);

    //    if (decodedToken.exp * 1000 < new Date().getTime()) ;
    //  }

    //  setUser(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  }, []);
  //     useEffect(() => {
  //     if (currentUser) {
  //       socket.current = io(host);
  //       socket.current.emit("add-user", currentUser._id);
  //     }
  //   }, [currentUser]);

  //   useEffect(async () => {
  //     if (currentUser) {
  //       if (currentUser.isAvatarImageSet) {
  //         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
  //         setContacts(data.data);
  //       } else {
  //         navigate("/setAvatar");
  //       }
  //     }
  //   }, [currentUser]);
  //    const handleChatChange = (chat) => {
  //     setCurrentChat(chat);
  //     console.log("current_chat",chat);
  //   };
  const getproductdetail = async (id) => {
    initModal();
    console.warn("fjfhjhgjrhgjrthgirthjgkrhgjrhkjgh", params.id);
    params.id = id;

    let result = await fetch(`http://localhost:5005/rfqmanagers/${id}`);

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

  const getproducts = async () => {
    //  console.log("the puran user",user?.result.email)
    console.log("the user hhjhjhjhj ", user.email);
    console.log("the user isjhjhjhjhjhj ", userName);

    let result = await fetch(
      `http://localhost:5005/userrfq/search/${user.email}`
    );
    result = await result.json();
    setData(result);
  };
  console.warn("results", data);

  //     getproducts();
  //     const token = user?.token;

  // if (token) {
  //   const decodedToken = decode(token);

  //   if (decodedToken.exp * 1000 < new Date().getTime()) ;
  // }

  // setUser(JSON.parse(localStorage.getItem('profilev')));

  //  if (result) { getproducts() }hbhbbbbbbbbbbbbbbbbbbbbh b                    [[[[]]]]

  const deleteproduct = async (id) => {
    let result = await fetch(`http://localhost:5005/rfqmanagers/${id} `, {
      method: "Delete",
    });

    // getproductdetail()

    result = await result.json();
    if (result) {
      getproducts();
    }
  };
  //    console.log("there it si ",kl)

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hthis", params.id);
    console.log(currentId);

    if (currentId === 0) {
      dispatch(updateProducts(currentId, postData));
      //    navigate('/homev')

      // clear();
    } else {
      dispatch(updateProducts(params.id, postData));
      //    navigate('/homev')

      // clear();
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
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
              
                </div>
              </Card.Header>
              <Card.Body className="px-0">
                <div className="table-responsive">
                  <table
                    id="user-list-table"
                    className="table table-striped"
                    role="grid"
                    data-toggle="data-table"
                  >
                    <thead>
                      <tr className="ligth">
                      <th>Name</th>
                      <th>RFQ</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Work Phone</th>
                        <th>Join Date</th>
                        {/* <th>Status</th> */}

                        <th min-width="100px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr>
                          <td>
                            <Link to={"/homeuserprofile/" + item._id}>
                              {item.Name}
                            </Link>
                          </td>
                                                    <td>{item.rfq_name}</td>
                          
                            <td>{item.to}</td>

                          <td>{item.status}</td>
                          <td>{item.Work_Phone}</td>
                          <td>{item.Dates}</td>

                          <td>
                            <div className="flex align-items-center list-user-action">
                              <Link
                                className="btn btn-sm btn-icon btn-success"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Add"
                                to={"/HomeRFQView/" + item._id}
                              >
                                <span className="btn-inner">
                                  <svg
                                    width="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M19.2036 8.66919V12.6792"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M21.2497 10.6741H17.1597"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </span>
                              </Link>{" "}
                              <Link
                                className="btn btn-sm btn-icon btn-warning"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Edit"
                                to={"/Hoevndrupdt/" + item._id}
                              >
                                <span className="btn-inner">
                                  <svg
                                    width="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M15.1655 4.60254L19.7315 9.16854"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                  </svg>
                                </span>
                              </Link>{" "}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <Button variant="success" onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form id="form-wizard1" className="text-center mt-3" onSubmit={handleSubmit} >

                                    <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4"> </h3>
                                                </div>
                                                <div className="col-5">

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">To: </label>
                                                        <input type="text"   className="form-control" name="tovendor" value={postData.to} onChange={(e) => setPostData({ ...postData, to: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Date:</label>
                                                        <input type="date" className="form-control" value={postData.Dates} onChange={(e) => setPostData({ ...postData, Dates: e.target.value })} />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Approver: </label>
                                                        <input type="text"   className="form-control" value={postData.approver} onChange={(e) => setPostData({ ...postData, approver: e.target.value })} />
                                                    </div>

                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="form-label">Discription: </label>
                                                        <input type="text"   className="form-control" value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                                                    </div>

                                                </div>

                                                 <div className="col-md-3">
                                                    <div className="form-group">
                                                        <label className="form-label">File</label>

                                                                                                                <FileBase type="file" multiple={''} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Status: </label>
                                                        <Form.Group className="form-group">
                                                            <select className="form-select mb-3 shadow-none" value={postData.status} onChange={(e) => setPostData({ ...postData, status: e.target.value })}>
                                                                <option value=" Published">Published</option>
                                                                <option value=" Draft">Draft</option>
                                                                <option value=" In Progress">In Progress</option>
                                                                <option value=" Finished">Finished</option>

                                                            </select>
                                                        </Form.Group>                                                </div>

                                                </div>

                                            </div>
                         </div>
                                        <button type="submit" name="next" className="btn btn-primary next action-button float-end" value="Submit" onClick={() => AccountShow('Image')} >Update</button>

                                    </fieldset>

                                </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal> */}

      </div>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 85vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: grey;
  .container {
    height: 85vh;
    width: 200vw;
    background-color: black;
    display: grid;
    grid-template-columns: 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
export default Srchbyeml;

// import { Row, Col, Form, Image } from "react-bootstrap";
// import Card from "../../../Card";

// //
// import React, { useState, useEffect } from "react";
// import useStyles from "./styles";

// import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
// import FileBase from "react-file-base64";

// import { updateProducts } from "../../../actions/RFQ_Manager";
// import Base64Downloader from "react-base64-downloader";
// import { useNavigate, Link, useParams } from "react-router-dom";
// // img
// const UpdatePost = ({ currentId, setCurrentId }) => {
//   const [postData, setPostData] = useState({
//     to: "",
//     from: "",
//     Dates: "",
//     vendordetails: "",

//     approver: "",
//     description: "",
//     any_other_instructions_for_quoting: "",
//     statement_for_qualification: "",
//     status: "Published",
//   });
//   const post = useSelector((state) =>
//     currentId ? state.posts.find((message) => message._id === currentId) : null
//   );
//   const dispatch = useDispatch();
//   // const user = JSON.parse(localStorage.getItem('profile'));
//   const navigate = useNavigate();
//   const params = useParams();
//   const [data, setData] = useState([]);
//   const [color, setcolor] = useState("");

//   useEffect(() => {
//     getproductdetail();
//   }, []);
//   const getproductdetail = async () => {
//     console.warn(params);
//     let result = await fetch(`http://localhost:5005/userRFQ/${params.id}`);

//     result = await result.json();
//     setData(result);
//     console.warn(result);
//     if (data.status == "Draft") {
//       setcolor("badge-danger");
//     }
//   };

//   // const handlee = (e) => {
//   //     const value = e.target.value
//   //     const checked = e.target.checked
//   //     if (checked) {
//   //         setPostData({ selectedFile: (result.selectedFile) })

//   //     }
//   // }
//   // if (!user?.result?.name) {
//   //     return (
//   //         <Paper className={classes.paper}>
//   //             <Typography variant="h6" align="center">
//   //                 Please Sign In to Enter this Dashboard.

//   //             </Typography>
//   //         </Paper>
//   //     );
//   // }
//   const base64 =
//     "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAAMSURBVBhXY/jPYAwAAzQBM849AKsAAAAASUVORK5CYII=";

//   const [show, AccountShow] = useState("A");
//   return (
//     <>
//       <div>
//         <Row>
//           <Col sm="12">
//             <Card>
//               <Card.Header className="d-flex justify-content-between">
//                 <div className="header-title">
//                   <Link
//                     type="submit"
//                     name="next"
//                     className="btn btn-primary next action-button float-end"
//                     to={"/rfqform"}
//                   >
//                     Add New RFQ
//                   </Link>
//                 </div>
//               </Card.Header>
//               <Card.Body className="px-0">
//                 <div className="table-responsive">
//                   <table
//                     id="user-list-table"
//                     className="table table-striped"
//                     role="grid"
//                     data-toggle="data-table"
//                   >
//                     <thead>
//                       <tr className="ligth">
//                         <th>Name</th>
//                         <th>Company Name</th>
//                         <th>Email</th>
//                         <th>Status</th>
//                         <th>Work Phone</th>
//                         <th>Join Date</th>

//                         {/* <th>Status</th> */}

//                         <th min-width="100px">Action</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {data.map((item) => (
//                         <tr>
//                           <td>
//                             <Link to={"/Userprofile/" + item._id}>
//                               {item.Name}
//                             </Link>
//                           </td>
//                           <td>{item.Company_Name}</td>
//                           <Link to={"/Userprofile/" + item._id}>
//                             <td>{item.to}</td>
//                           </Link>

//                           {/* if({item.status}==="Draft")
//                           { */}
//                           <td>
//                             <span className="bade badge-danger">
//                               {item.status}
//                             </span>
//                           </td>
//                           {/* } */}
//                           {/* <td>{item.status}</td> */}
//                           <td>{item.Work_Phone}</td>
//                           <td>{item.Dates}</td>
//                           <td>
//                             <div className="flex align-items-center list-user-action">
//                               <Link
//                                 className="btn btn-sm btn-icon btn-success"
//                                 data-toggle="tooltip"
//                                 data-placement="top"
//                                 title=""
//                                 data-original-title="Add"
//                                 to={"/HomeRFQView/" + item._id}
//                               >
//                                 <span className="btn-inner">
//                                   <svg
//                                     width="32"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path
//                                       fillRule="evenodd"
//                                       clipRule="evenodd"
//                                       d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                     <path
//                                       fillRule="evenodd"
//                                       clipRule="evenodd"
//                                       d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                     <path
//                                       d="M19.2036 8.66919V12.6792"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                     <path
//                                       d="M21.2497 10.6741H17.1597"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                   </svg>
//                                 </span>
//                               </Link>{" "}
//                               <Link
//                                 className="btn btn-sm btn-icon btn-warning"
//                                 data-toggle="tooltip"
//                                 data-placement="top"
//                                 title=""
//                                 data-original-title="Edit"
//                                 to={"/HomeRFQUpdate/" + item._id}
//                               >
//                                 <span className="btn-inner">
//                                   <svg
//                                     width="20"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path
//                                       d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                     <path
//                                       fillRule="evenodd"
//                                       clipRule="evenodd"
//                                       d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                     <path
//                                       d="M15.1655 4.60254L19.7315 9.16854"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                   </svg>
//                                 </span>
//                               </Link>{" "}
//                               <Link
//                                 className="btn btn-sm btn-icon btn-danger"
//                                 data-toggle="tooltip"
//                                 data-placement="top"
//                                 title=""
//                                 data-original-title="Delete"
//                                 onClick={() => deleteproduct(item._id)}
//                               >
//                                 <span className="btn-inner">
//                                   <svg
//                                     width="20"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     stroke="currentColor"
//                                   >
//                                     <path
//                                       d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                     <path
//                                       d="M20.708 6.23975H3.75"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                     <path
//                                       d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                     ></path>
//                                   </svg>
//                                 </span>
//                               </Link>{" "}
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// };

// export default UpdatePost;
