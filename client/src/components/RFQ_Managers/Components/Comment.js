// import React, { useEffect, useState, useRef } from "react";
// import FsLightbox from "fslightbox-react";
// import { Row, Col, Image, Form, Nav, Dropdown, Tab } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
// import bodyParser from "body-parser";

// const Comment = () => {
//   const [postData, setPostData] = useState({
//     user_id: "",
//     message: "",
//   });

//   const AddComment = async () => {
//     const result = await fetch(
//       `http://localhost:5005/rfqmanagers/${params.id}`,
//       {
//         method: "post",
//         body: JSON.stringify({ postData }),
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     result = await result.json();
//     console.warn(result);
//   };

//   return (
//     <Card>
//       <Card.Header>
//         <div className="header-title">
//           <h4 className="card-title">Comments</h4>
//         </div>
//       </Card.Header>
//       <Card.Body>
//         <ul className="list-inline m-0 p-0">
//           <li className="d-flex mb-2">
//             <div className="news-icon me-3"></div>
//             {/* <p className="news-detail mb-0">
//                       there is a meetup in your city on fryday at 19:00.{" "}
//                       <Link to="#">see details</Link>
//                     </p> */}
//           </li>
//           <Form.Control
//             type="text"
//             className="rounded"
//             placeholder="Place a Comment!"
//           />
//           <li className="d-flex">
//             <div className="news-icon me-3"></div>
//           </li>
//         </ul>
//       </Card.Body>
//     </Card>
//   );
// };

// export default Comment;
