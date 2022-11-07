import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createProducts } from '../../actions/Complaince';
import useStyles from './styles';
import Base64Downloader from 'react-base64-downloader';
import { useNavigate, Link } from 'react-router-dom';


const RFQ_Manager = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        Regulatory_Authority: '',
        category: '',
        applied_standard: '',
        Sub_Sections: '',
        Report_type: '',
        Status: 'Published',
        originator: '',
        Compliance_Start_Date: '',
        Compliance_End_Date: '',
        country: '',
    });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate()

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);


    const clear = () => {
        setCurrentId(0);
        setPostData({
            Regulatory_Authority: '',
            category: '',
            applied_standard: '',
            Sub_Sections: '',
            Report_type: '',
            Status: '',
            originator: '',
            Compliance_Start_Date: '',
            Compliance_End_Date: '',
            country: '',
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createProducts(postData));
            navigate('/')

            clear();
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
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAAMSURBVBhXY/jPYAwAAzQBM849AKsAAAAASUVORK5CYII=';

    return (
        // <Paper className={classes.paper}>
        //     <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        //         <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        //         <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.productname} onChange={(e) => setPostData({ ...postData, productname: e.target.value })} />
        //         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

        //         <select value={postData.selectmenu} onChange={(e) => setPostData({ ...postData, selectmenu: e.target.value })}>
        //             <option value="volvo">Volvo</option>
        //             <option value="saab">Saab</option>
        //             <option value="mercedes">Mercedes</option>
        //             <option value="audi">Audi</option>
        //         </select>
        //         <hr />
        //         <hr />
        //         <hr />
        //         <div> <input type="checkbox" onChange={(e) => setPostData({ ...postData, asd: e.target.checked })} name="asd " checked={postData.asd} />I AGREE</div>
        //         <div> <input type="radio" onChange={(e) => setPostData({ ...postData, gender: e.target.value })} name="gender " value='male' />MALE</div>
        //         <div> <input type="radio" onChange={(e) => setPostData({ ...postData, gender: e.target.value })} name="gender " value='female' />FEMALE</div>
        //         {/* <div>
        //             <div> <input type="checkbox" name="fruits" value="apple" onChange={handlee} />apple</div>
        //             <div> <input type="checkbox" name="fruits" value="mango" onChange={handlee} />mango</div>
        //             <div> <input type="checkbox" name="fruits" value="orange" onChange={handlee} />orange</div>
        //             <div> <input type="checkbox" name="fruits" value="guava" onChange={handlee} />guava</div>
        //         </div> */}


        //         <Link to="/dashboard">sdfsdsdfsdfsdfsdfds</Link>
        //         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        //         <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        //     </form>
        // </Paper >
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <div>







                    <div>



                        <br />

                        <h3>Add New RFQ Manager</h3>
                        <br />

                        {/* <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}

                        <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">TO:
                            </label>
                            <input type="text" class="form-control" id="inputEmail4" value={postData.to} onChange={(e) => setPostData({ ...postData, to: e.target.value })} />
                        </div>




                        <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">From:
                            </label>
                            <input type="text" class="form-control" id="inputEmail4" value={postData.from} onChange={(e) => setPostData({ ...postData, from: e.target.value })} />
                        </div>

                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Date:
                            </label>
                            <input type="date" class="form-control" id="inputEmail4" value={postData.Dates} onChange={(e) => setPostData({ ...postData, Dates: e.target.value })} />



                        </div>

                        <div class="col-md-4">
                            <label for="inputState" class="form-label">date_and_time_picker
                            </label>
                            <input type="text" class="form-control" id="inputEmail4" value={postData.date_and_time_picker} onChange={(e) => setPostData({ ...postData, date_and_time_picker: e.target.value })} />



                        </div> <div class="col-md-4">
                            <label for="inputState" class="form-label">Approver
                            </label>
                            <input type="text" class="form-control" id="inputEmail4" value={postData.approver} onChange={(e) => setPostData({ ...postData, approver: e.target.value })} />



                        </div> <div class="col-md-4">
                            <label for="inputState" class="form-label">Description
                            </label>
                            <input type="text" class="form-control" id="inputEmail4" value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />



                        </div>

                    </div> <div class="col-md-4">
                        <label for="inputState" class="form-label">Status
                        </label>
                        <input type="text" class="form-control" id="inputEmail4" value={postData.status} onChange={(e) => setPostData({ ...postData, status: e.target.value })} />



                    </div>




                </div>










            </form>

        </Paper >



    );
};

export default RFQ_Manager;