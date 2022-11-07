import React, { useEffect, useState } from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
// import DeleteIcon from '@material-ui/icons/Delete';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import moment from "moment";
import {
  useNavigate,
  Link,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { ExternalLink } from "react-external-link";

import { deleteProducts } from "../../../actions/RFQ_Manager";
import useStyles from "./styles";
// import {Delete} from '../../../actions/products'
import { Row, Col, Image } from "react-bootstrap";
import Card from "../../../Card";
const RFQ_Manager = () => {
  // const dispatch = useDispatch();
  // const classes = useStyles();
  // const user = JSON.parse(localStorage.getItem('profile'));
  // const history = useNavigate();

  const [data, setData] = useState([]);
  useEffect(() => {
    getproducts();
  }, []);

  const getproducts = async () => {
    let result = await fetch("http://localhost:5005/userRFQ");
    result = await result.json();
    setData(result);
  };
  console.warn("results", data);

  const deleteproduct = async (id) => {
    let result = await fetch(`http://localhost:5005/userRFQ/${id} `, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getproducts();
    }
  };

  // const as = (e) => {
  //     setCurrentId(post._id)
  //     history.push(`/home`);

  // }

  // const openPost = (e) => {
  //     // dispatch(getPost(post._id, history));

  //     history.push(`/posts/${post._id}`);
  // }; const view = (e) => {
  //     // dispatch(getPost(post._id, history));

  //     history.push(`/singlepost/ + ${post._id}`);
  // }; const update = (e) => {
  //     // dispatch(getPost(post._id, history));

  //     history.push(`/updatepost/${post._id}`);
  // };
  // const Likes = () => {
  //     if (post.likes.length > 0) {
  //         return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
  //             ? (
  //                 <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
  //             ) : (
  //                 <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
  //             );
  //     }

  //     return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  // };

  return (
    // <Card className={classes.card}>
    //     <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    //     <div className={classes.overlay}>
    //         <Typography variant="h6">{post.selectmenu}</Typography>
    //         <Typography variant="h6">{post.asd}</Typography>
    //         <Typography variant="h6">{post.gender}</Typography>
    //     </div>

    //     <div className={classes.details}>
    //     </div>
    //     <div className={classes.overlay2}>
    //         <Button style={{ color: 'white' }} id="myBtn" size="small" onClick={as}><MoreHorizIcon fontSize="default" /></Button>
    //         <Link to={"/updatepost/" + post._id}>UPDATE</Link>
    //     </div>
    //     <CardContent>
    //         <Typography variant="body2" color="textSecondary" component="p">{post.productname}</Typography>
    //     </CardContent>
    //     <CardActions className={classes.cardActions}>
    //         {/* <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
    //             <Likes />
    //         </Button> */}

    //         <Button size="small" color="secondary" onClick={() => dispatch(deleteProducts(post._id))}>
    //             <DeleteIcon fontSize="small" /> Delete
    //         </Button>
    //         <Button size="small" color="secondary" name="test" className={classes.cardAction}
    //             onClick={openPost}>
    //             <DeleteIcon fontSize="small" /> OPEN
    //             <Link to={"/singlepost/" + post._id}>OPEN</Link>

    //         </Button>

    //     </CardActions>

    // </Card>
    // <div className='container'>
    //     <div className='row'>
    //         <div class="table-responsive">
    //             <table class="table table-hover">
    //                 <thead>
    //                     <tr>
    //                         <th scope="col">#</th>
    //                         <th scope="col">NAME</th>
    //                         <th scope="col">SELECTMENU</th>
    //                         <th scope="col">RADIO</th>
    //                         <th scope="col">CHECKBOX</th>
    //                         <th scope="col">FILE</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <th scope="row">1</th>
    //                         <td>{post.productname}</td>
    //                         <td>{post.selectmenu}</td>
    //                         <td>{post.gender}</td>
    //                         <td>{post.asd}</td>
    //                         {/* <td>{post.selectedFile}</td> */}
    //                         <td><Link to={"/singlepost/" + post._id}>VIEW</Link></td>
    //                         <td><Link to={"/updatepost/" + post._id}>UPDATE</Link></td>
    //                         <td><Button size="small" color="secondary" onClick={() => dispatch(deleteProducts(post._id))}> <DeleteIcon fontSize="small" /> Delete </Button></td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // </div>

    // <div>
    // <>
    // <div>
    //   <Row>
    //      <Col sm="12">
    //         <Card>
    //            <Card.Header className="d-flex justify-content-between">
    //               <div className="header-title">
    //               {/* <Link type="submit" name="next" className="btn btn-primary next action-button float-end" value="Submit" onClick={cnp}>Create New</Link> */}

    //               </div>
    //            </Card.Header>
    //            <Card.Body className="px-0">
    //               <div className="table-responsive">
    //                  <table id="user-list-table" className="table table-striped" role="grid" data-toggle="data-table">
    //                     <thead>
    //                        <tr className="ligth">
    //                           <th>Product Name</th>
    //                           <th>Product Family</th>
    //                           <th>Category</th>
    //                           <th>Category Standard</th>
    //                           <th>Start Date</th>

    //                           <th min-width= "100px">Action</th>
    //                        </tr>
    //                     </thead>
    //                     <tbody>
    //                     {
    //                         data.map((item)=>
    //                        <tr>
    //                           <td>{item.Product_Name}</td>
    //                           <td>-</td>
    //                           <td>{item.Product_Category}</td>
    //                           <td>{item.Applicable_Standards}</td>
    //                           <td>Date</td>
    //                           <td>
    //                              <div className="flex align-items-center list-user-action">
    //                                 <Link className="btn btn-sm btn-icon btn-success" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add" to="#">
    //                                    <span className="btn-inner">
    //                                       <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
    //                                          <path fillRule="evenodd" clipRule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                          <path fillRule="evenodd" clipRule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                          <path d="M19.2036 8.66919V12.6792" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                          <path d="M21.2497 10.6741H17.1597" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                       </svg>
    //                                    </span>
    //                                 </Link>{' '}
    //                                 <Link className="btn btn-sm btn-icon btn-warning" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" to={"/updatepost/" + item._id}>
    //                                    <span className="btn-inner">
    //                                       <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                                          <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                          <path fillRule="evenodd" clipRule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                          <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                       </svg>
    //                                    </span>
    //                                 </Link>{' '}
    //                                 <Link className="btn btn-sm btn-icon btn-danger" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" to="#" >
    //                                    <span className="btn-inner">
    //                                       <svg width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
    //                                          <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                          <path d="M20.708 6.23975H3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                          <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //                                       </svg>
    //                                    </span>
    //                                 </Link>{' '}
    //                              </div>
    //                           </td>
    //                        </tr>)}
    //                     </tbody>
    //                  </table>
    //               </div>
    //            </Card.Body>
    //         </Card>
    //      </Col>
    //   </Row>
    // </div>
    // </>
    // </div>

    <>
      <div>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <Link
                    type="submit"
                    name="next"
                    className="btn btn-primary next action-button float-end"
                    to={"/rfqform"}
                  >
                    Add New RFQ
                  </Link>
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
                        <th>Vendor Email</th>
                        <th>Date</th>
                        <th>status</th>

                        {/* <th>Status</th> */}

                        <th min-width="100px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr>
                          <td>{item.to}</td>
                          <td>{item.Dates}</td>
                          <td>{item.status}</td>

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
                                to={"/HomeRFQUpdate/" + item._id}
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
                              <Link
                                className="btn btn-sm btn-icon btn-danger"
                                data-toggle="tooltip"
                                data-placement="top"
                                title=""
                                data-original-title="Delete"
                                onClick={() => deleteproduct(item._id)}
                              >
                                <span className="btn-inner">
                                  <svg
                                    width="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="currentColor"
                                  >
                                    <path
                                      d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M20.708 6.23975H3.75"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973"
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
      </div>
    </>
  );
};

export default RFQ_Manager;
