import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import EditIcon from '@mui/icons-material/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useNavigate, Link } from 'react-router-dom';


import { Complaince } from '../../../actions/Complaince';
import useStyles from './styles';

const Complain = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useNavigate();

    const as = (e) => {
        setCurrentId(post._id)
        history.push(`/home`);


    }

    const openPost = (e) => {
        // dispatch(getPost(post._id, history));


    }; const view = (e) => {
        // dispatch(getPost(post._id, history));

    }; const update = (e) => {
        // dispatch(getPost(post._id, history));

    };
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









        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>Alichimistic - Products</title>
            {/* Custom fonts for this template */}


            {/* Custom styles for this template */}
            <link href="css/sb-admin-2.min.css" rel="stylesheet" />
            {/* Custom styles for this page */}
            <link
                href="vendor/datatables/dataTables.bootstrap4.min.css"
                rel="stylesheet"
            />
            {/* Page Wrapper */}
            <div id="wrapper">
                {/* Sidebar */}
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <h1 className="h3 mb-2 text-gray-800">Products</h1>

                            {/* DataTales Example */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">

                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div
                                            id="dataTable_wrapper"
                                            className="dataTables_wrapper dt-bootstrap4"
                                        >
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="dataTables_length" id="dataTable_length">
                                                        <label>
                                                            Show{" "}
                                                            <select
                                                                name="dataTable_length"
                                                                aria-controls="dataTable"
                                                                className="custom-select custom-select-sm form-control form-control-sm"
                                                            >
                                                                <option value={10}>10</option>
                                                                <option value={25}>25</option>
                                                                <option value={50}>50</option>
                                                                <option value={100}>100</option>
                                                            </select>{" "}
                                                            entries
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div id="dataTable_filter" className="dataTables_filter">
                                                        <label>
                                                            Search:
                                                            <input
                                                                type="search"
                                                                className="form-control form-control-sm"
                                                                placeholder=""
                                                                aria-controls="dataTable"
                                                            />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <table
                                                        className="table table-bordered dataTable"
                                                        id="dataTable"
                                                        width="100%"
                                                        cellSpacing={0}
                                                        role="grid"
                                                        aria-describedby="dataTable_info"
                                                        style={{ width: "100%" }}
                                                    >
                                                        <thead>
                                                            <tr role="row">
                                                                <th
                                                                    className="sorting sorting_asc"
                                                                    tabIndex={0}
                                                                    aria-controls="dataTable"
                                                                    rowSpan={1}
                                                                    colSpan={1}
                                                                    aria-sort="ascending"
                                                                    aria-label="Name: activate to sort column descending"
                                                                    style={{ width: "157.406px" }}
                                                                >
                                                                    Product Name
                                                                </th>
                                                                <th
                                                                    className="sorting"
                                                                    tabIndex={0}
                                                                    aria-controls="dataTable"
                                                                    rowSpan={1}
                                                                    colSpan={1}
                                                                    aria-label="Position: activate to sort column ascending"
                                                                    style={{ width: "259.328px" }}
                                                                >
                                                                    Compliance status
                                                                </th>
                                                                <th
                                                                    className="sorting"
                                                                    tabIndex={0}
                                                                    aria-controls="dataTable"
                                                                    rowSpan={1}
                                                                    colSpan={1}
                                                                    aria-label="Office: activate to sort column ascending"
                                                                    style={{ width: "111.578px" }}
                                                                >
                                                                    Document

                                                                </th>


                                                            </tr>
                                                        </thead>

                                                        <tbody>


                                                            <tr className="even">
                                                                <td className="sorting_1">product </td>
                                                                <td>not complain</td>
                                                                <td></td>


                                                            </tr>




                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-5">
                                                    <div
                                                        className="dataTables_info"
                                                        id="dataTable_info"
                                                        role="status"
                                                        aria-live="polite"
                                                    >
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-7">
                                                    <div
                                                        className="dataTables_paginate paging_simple_numbers"
                                                        id="dataTable_paginate"
                                                    >
                                                        <ul className="pagination">
                                                            <li
                                                                className="paginate_button page-item previous disabled"
                                                                id="dataTable_previous"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    aria-controls="dataTable"
                                                                    data-dt-idx={0}
                                                                    tabIndex={0}
                                                                    className="page-link"
                                                                >
                                                                    Previous
                                                                </a>
                                                            </li>
                                                            <li className="paginate_button page-item active">
                                                                <a
                                                                    href="#"
                                                                    aria-controls="dataTable"
                                                                    data-dt-idx={1}
                                                                    tabIndex={0}
                                                                    className="page-link"
                                                                >
                                                                    1
                                                                </a>
                                                            </li>
                                                            <li className="paginate_button page-item ">
                                                                <a
                                                                    href="#"
                                                                    aria-controls="dataTable"
                                                                    data-dt-idx={2}
                                                                    tabIndex={0}
                                                                    className="page-link"
                                                                >
                                                                    2
                                                                </a>
                                                            </li>
                                                            <li className="paginate_button page-item ">
                                                                <a
                                                                    href="#"
                                                                    aria-controls="dataTable"
                                                                    data-dt-idx={3}
                                                                    tabIndex={0}
                                                                    className="page-link"
                                                                >
                                                                    3
                                                                </a>
                                                            </li>
                                                            <li className="paginate_button page-item ">
                                                                <a
                                                                    href="#"
                                                                    aria-controls="dataTable"
                                                                    data-dt-idx={4}
                                                                    tabIndex={0}
                                                                    className="page-link"
                                                                >
                                                                    4
                                                                </a>
                                                            </li>
                                                            <li className="paginate_button page-item ">
                                                                <a
                                                                    href="#"
                                                                    aria-controls="dataTable"
                                                                    data-dt-idx={5}
                                                                    tabIndex={0}
                                                                    className="page-link"
                                                                >
                                                                    5
                                                                </a>
                                                            </li>
                                                            <li className="paginate_button page-item ">
                                                                <a
                                                                    href="#"
                                                                    aria-controls="dataTable"
                                                                    data-dt-idx={6}
                                                                    tabIndex={0}
                                                                    className="page-link"
                                                                >
                                                                    6
                                                                </a>
                                                            </li>
                                                            <li
                                                                className="paginate_button page-item next"
                                                                id="dataTable_next"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    aria-controls="dataTable"
                                                                    data-dt-idx={7}
                                                                    tabIndex={0}
                                                                    className="page-link"
                                                                >
                                                                    Next
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>
            {/* End of Page Wrapper */}
            {/* Scroll to Top Button*/}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up" />
            </a>
            {/* Logout Modal*/}
            <div
                className="modal fade"
                id="logoutModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Ready to Leave?
                            </h5>
                            <button
                                className="close"
                                type="button"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Select "Logout" below if you are ready to end your current session.
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                data-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <a className="btn btn-primary" href="login.html">
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bootstrap core JavaScript*/}
            {/* Core plugin JavaScript*/}
            {/* Custom scripts for all pages*/}
            {/* Page level plugins */}
            {/* Page level custom scripts */}
        </>





    );
};

export default Complain;