import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createProducts } from '../../actions/Complaince';
import useStyles from './styles';
import Base64Downloader from 'react-base64-downloader';
import { useNavigate, Link } from 'react-router-dom';


const Complainceform = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
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

                        <h3>Add New Compliance</h3>
                        <br />

                        {/* <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}

                        <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Regulatory_Authority
                            </label>
                            <input type="text" class="form-control" id="inputEmail4" value={postData.Regulatory_Authority} onChange={(e) => setPostData({ ...postData, Regulatory_Authority: e.target.value })} />
                        </div>


                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Select Category</label>
                            <select id="inputState" class="form-select" value={postData.category} onChange={(e) => setPostData({ ...postData, category: e.target.value })} >
                                <option selected>Choose...</option>
                                <option value="BATT">BATT</option>
                                <option value="CABL">CABL</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>

                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">applied_standard </label>
                            <select id="inputState" class="form-select" value={postData.applied_standard} onChange={(e) => setPostData({ ...postData, applied_standard: e.target.value })} >
                                <option selected>Choose...</option>
                                <option value="IEC 60086-1:2015">IEC 60086-1:2015</option>
                                <option value="IEC 60086-1:2015">IEC 60086-1:2015</option>
                                <option value="IEC 60086-1:2015">IEC 60086-1:2015</option>
                                <option value="IEC 60086-1:2015">IEC 60086-1:2015</option>
                            </select>

                        </div>

                        <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Sub Sections
                            </label>
                            <input type="text" class="form-control" id="inputEmail4" value={postData.Sub_Sections} onChange={(e) => setPostData({ ...postData, Sub_Sections: e.target.value })} />
                        </div>

                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Record Type</label>
                            <select id="inputState" class="form-select" value={postData.Report_type} onChange={(e) => setPostData({ ...postData, Report_type: e.target.value })} >
                                <option selected>Choose...</option>
                                <option value="IEC">IEC</option>
                                <option value="Laser ">Laser </option>
                            </select>

                        </div>


                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Status </label>
                            <select id="inputState" class="form-select" value={postData.Status} onChange={(e) => setPostData({ ...postData, Status: e.target.value })} >
                                <option selected>Choose...</option>
                                <option value="Publish">Publish</option>
                                <option value="Draft ">Draft </option>

                            </select>

                        </div>

                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Originator </label>
                            <select id="inputState" class="form-select" value={postData.Status} onChange={(e) => setPostData({ ...postData, Status: e.target.value })} >
                                <option selected>Choose...</option>
                                <option value="superadmin@alchimetis.com">superadmin@alchimetis.com</option>

                            </select>

                        </div>
                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Compliance Start Date *
                            </label>
                            <input type="date" class="form-control" id="inputEmail4" value={postData.Compliance_Start_Date} onChange={(e) => setPostData({ ...postData, Compliance_Start_Date: e.target.value })} />



                        </div>

                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Compliance End Date *
                            </label>
                            <input type="date" class="form-control" id="inputEmail4" value={postData.Compliance_End_Date} onChange={(e) => setPostData({ ...postData, Compliance_End_Date: e.target.value })} />



                        </div>



                        <div class="col-md-4">
                            <label for="inputState" class="form-label">Country </label>
                            <select id="inputState" class="form-select" value={postData.country} onChange={(e) => setPostData({ ...postData, country: e.target.value })} >
                                <option selected>Choose...</option>
                                <option value="India">India</option>
                                <option value="USA">USA</option>

                            </select>

                        </div>
                    </div>
                </div>










            </form>

        </Paper >



    );
};

export default Complainceform;