import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createProducts, updateProducts } from '../../actions/products';
import useStyles from './styles';
import Base64Downloader from 'react-base64-downloader';
import { useNavigate, Link } from 'react-router-dom';
import VerticalNav from '../../VerticalNav';
import Sidebar from '../../Sidebar'


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        Regulatory_Model_Name: '',
        Product_Name: '',
        Regulatory_Family: '',
        Product_Category: '',
        Product_Description: '',
        Model_Difference: '',
        Household: false,
        Commercial: false,
        Clinical: false,
        Applicable_Standards: '',
        Applicant_Name_and_Address: '',
        Manufacturer_Name_and_Address: '',
        TradeMark: '',
        Family: '',
        Market: '',


        Overall_Size_of_Equipment: '',
        WebGLShader: '',
        Voltage: '',
        Phase: '',
        Frequency: '',
        Power: '',
        Current: '',
        Operation_Mode: '',
        Ordinary_person: '',
        Children_likely_present: '',
        Instructed_person: '',
        Skilled_person: '',
        AC_mains: '',
        DC_mains: '',
        Battery_Powered: '',
        Skilled_person: '',


        Non_detachable_Supply_Cord: '',
        Appliance_Coupler: '',
        Direct_plug_in: '',
        Non_detachable_Supply_Cord_B: '',
        Appliance_Coupler_B: '',

        Permanent_connection: '',
        Mating_connector: '',
        Movable: '',
        Transportable: '',
        Stationary_for_building_in: '',
        Wall_ceiling_mounted_SRME_rack_mounted: '',
        Hand_held: '',
        Other: '',





        Pollution_Degree: '', Manufacturer_Specific_Max_Operating_Ambient: '',
        Ingree_Protection_Classification: '', Altitude_During_Operation: '',
        Mass_Of_Equipment: '', Relative_Humidity: '', Atmospheric_Pressure: '', Indoor: '',
        Outdoor: '',






        Copy_of_Marking_Plate: '',
        WarningOrCautionary_Marking: '',
        Fuse_Type: '',
        Fuse_Marking: '',


        //complaince report
        Report_Number: '',

    });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate()

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);


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
            dispatch(createProducts(postData));
            navigate('/')

            // clear();
        } else {
            dispatch(createProducts(postData));
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
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAAMSURBVBhXY/jPYAwAAzQBM849AKsAAAAASUVORK5CYII=';

    return (
        // <Paper className={classes.paper}>
        //     <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        //         <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        //         <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.productname} onChange={(e) => setPostData({ ...postData, productname: e.target.value })} />
        //         {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>

        //         <select value={postData.selectmenu} onChange={(e) => setPostData({ ...postData, selectmenu: e.target.value })}>
        //             <option value="volvo">Volvo</option>
        //             <option value="saab">Saab</option>
        //             <option value="mercedes">Mercedes</option>
        //             <option value="audi">Audi</option>
        //         </select> */}
        //         <hr />
        //         <hr />
        //         <hr />
        //         {/* <div> <input type="checkbox" onChange={(e) => setPostData({ ...postData, asd: e.target.checked })} name="asd " checked={postData.asd} />I AGREE</div>
        //         <div> <input type="radio" onChange={(e) => setPostData({ ...postData, gender: e.target.value })} name="gender " value='male' />MALE</div>
        //         <div> <input type="radio" onChange={(e) => setPostData({ ...postData, gender: e.target.value })} name="gender " value='female' />FEMALE</div> */}
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
        <VerticalNav/>
        <Sidebar/>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <div>







                    <div>



                        <br />

                        <h3>General Product Information</h3>
                        <br />

                        {/* <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography> */}

                        <div className="col-md-4">
                            <label for="inputEmail4" className="form-label">Regulatory Model Name
                            </label>
                            <input type="text" className="form-control" id="inputEmail4" value={postData.Regulatory_Model_Name} onChange={(e) => setPostData({ ...postData, Regulatory_Model_Name: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label for="inputPassword4" className="form-label">Product Name
                            </label>
                            <input type="text" className="form-control" id="inputPassword4" value={postData.Product_Name} onChange={(e) => setPostData({ ...postData, Product_Name: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label for="inputEmail4" className="form-label">Regulatory Family

                            </label>
                            <input type="text" className="form-control" id="inputEmail4" value={postData.Regulatory_Family} onChange={(e) => setPostData({ ...postData, Regulatory_Family: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label for="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select" value={postData.Product_Category} onChange={(e) => setPostData({ ...postData, Product_Category: e.target.value })} >
                                <option selected>Choose...</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>

                        </div>
                        <div className="col-4">
                            <label for="inputAddress" className="form-label">Product Description / Intended Use</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={postData.Product_Description} onChange={(e) => setPostData({ ...postData, Product_Description: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label for="inputAddress2" className="form-label">Model Difference (if applicable) </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Model_Difference} onChange={(e) => setPostData({ ...postData, Model_Difference: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Intended Environment
                            </label>

                            <div className="">
                                <input type="checkbox" id="" name="Household" className="" checked={postData.Household} onChange={(e) => setPostData({ ...postData, Household: e.target.checked })} />
                                <label className="" for="">Household </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="Commercial" className="" checked={postData.Commercial} onChange={(e) => setPostData({ ...postData, Commercial: e.target.checked })} />
                                <label className="" for=""> Commercial </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="Clinical" className="" checked={postData.Clinical} onChange={(e) => setPostData({ ...postData, Clinical: e.target.checked })} />
                                <label className="" for=""> Clinical </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="inputAddress2" className="form-label">Applicable Standards </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Applicable_Standards} onChange={(e) => setPostData({ ...postData, Applicable_Standards: e.target.value })} />

                        </div>
                        < div className="col-md-4">
                            <label for="inputAddress2" className="form-label">Applicant Name and Address </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Applicant_Name_and_Address} onChange={(e) => setPostData({ ...postData, Applicant_Name_and_Address: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label for="inputAddress2" className="form-label">Manufacturer_Name_and_Address</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Manufacturer_Name_and_Address} onChange={(e) => setPostData({ ...postData, Manufacturer_Name_and_Address: e.target.value })} />

                        </div>
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">TradeMark
                            </label>

                            <div className="">
                                <input type="radio" id="" name="a" className="" value='Yes' onChange={(e) => setPostData({ ...postData, TradeMark: e.target.value })} />
                                <label className="" for="">Yes </label>
                            </div>
                            <div className="">
                                <input type="radio" id="" name="a" className="" value='No' onChange={(e) => setPostData({ ...postData, TradeMark: e.target.value })} />
                                <label className="" for=""> No </label>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <label for="inputAddress2" className="form-label">Family/Series Model </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Family} onChange={(e) => setPostData({ ...postData, Family: e.target.value })} />

                        </div>
                        <div className="col-md-4">
                            <label for="inputAddress2" className="form-label">Market </label>
                            <select id="inputState" className="form-select" value={postData.Market} onChange={(e) => setPostData({ ...postData, Market: e.target.value })} >
                                <option selected>India</option>
                                <option value="volvo">USA</option>
                                <option value="saab">UK</option>

                            </select>
                        </div>

                        <br />
                        <hr />
                        <hr />

                        <br />

                        <br />

                        <br />
                        <h3>Product Technical Information</h3>
                        <hr />
                        <br />




                        <div className="col-md-2">
                            <p>Overall Size of Equipment (W x D x H)
                            </p>
                            <input type="text" className="form-control" id="inputEmail4" value={postData.Overall_Size_of_Equipment} onChange={(e) => setPostData({ ...postData, Overall_Size_of_Equipment: e.target.value })} />


                            <select id="inputState" className="form-select" value={postData.WebGLShader} onChange={(e) => setPostData({ ...postData, WebGLShader: e.target.value })} >
                                <option value="mm">mm</option>
                                <option value="cm">cm</option>

                            </select>
                        </div>



                        <div className="col-md-2">
                            <p>Power Rating/Electrical Rating</p>
                            <p>Voltage</p>
                            <input type="number" className="form-control" id="inputEmail4" value={postData.Voltage} onChange={(e) => setPostData({ ...postData, Voltage: e.target.value })} />
                            <p>Phase</p>
                            <input type="number" className="form-control" id="inputEmail4" value={postData.Phase} onChange={(e) => setPostData({ ...postData, Phase: e.target.value })} />
                            <p>Frequency</p>
                            <input type="number" className="form-control" id="inputEmail4" value={postData.Frequency} onChange={(e) => setPostData({ ...postData, Frequency: e.target.value })} />
                            <p>Power</p>
                            <input type="number" className="form-control" id="inputEmail4" value={postData.Power} onChange={(e) => setPostData({ ...postData, Power: e.target.value })} />
                            <p>Current</p>
                            <input type="number" className="form-control" id="inputEmail4" value={postData.Current} onChange={(e) => setPostData({ ...postData, Current: e.target.value })} />
                        </div>

                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Operation Mode
                            </label>

                            <div className="">
                                <input type="radio" id="" name="b" className="" value='Continous' onChange={(e) => setPostData({ ...postData, Operation_Mode: e.target.value })} />
                                <label className="" for="">Continous </label>
                            </div>
                            <div className="">
                                <input type="radio" id="" name="b" className="" value=' Duty Cycle' onChange={(e) => setPostData({ ...postData, Operation_Mode: e.target.value })} />
                                <label className="" for=""> Duty Cycle </label>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Classification of use by

                            </label>

                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Ordinary_person} onChange={(e) => setPostData({ ...postData, Ordinary_person: e.target.checked })} />
                                <label className="" for="">Ordinary person </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Children_likely_present} onChange={(e) => setPostData({ ...postData, Children_likely_present: e.target.checked })} />
                                <label className="" for=""> Children likely present </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Instructed_person} onChange={(e) => setPostData({ ...postData, Instructed_person: e.target.checked })} />
                                <label className="" for=""> Instructed person </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Skilled_person} onChange={(e) => setPostData({ ...postData, Skilled_person: e.target.checked })} />
                                <label className="" for=""> Skilled person  </label>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Supply Connection

                            </label>

                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.AC_mains} onChange={(e) => setPostData({ ...postData, AC_mains: e.target.checked })} />
                                <label className="" for="">AC mains </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.DC_mains} onChange={(e) => setPostData({ ...postData, DC_mains: e.target.checked })} />
                                <label className="" for=""> DC mains </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Battery_Powered} onChange={(e) => setPostData({ ...postData, Battery_Powered: e.target.checked })} />
                                <label className="" for=""> Battery Powered </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Skilled_person} onChange={(e) => setPostData({ ...postData, Skilled_person: e.target.checked })} />
                                <label className="" for=""> Skilled person  </label>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Supply Connection – Type
                                Pluggable equipment type A

                            </label>

                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Skilled_person} onChange={(e) => setPostData({ ...postData, Skilled_person: e.target.checked })} />
                                <label className="" for="">Non-detachable Supply Cord </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Skilled_person} onChange={(e) => setPostData({ ...postData, Skilled_person: e.target.checked })} />
                                <label className="" for=""> Appliance Coupler </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Skilled_person} onChange={(e) => setPostData({ ...postData, Skilled_person: e.target.checked })} />
                                <label className="" for=""> Direct plug-in </label>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Pluggable equipment type B

                            </label>

                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Non_detachable_Supply_Cord_B} onChange={(e) => setPostData({ ...postData, Non_detachable_Supply_Cord_B: e.target.checked })} />
                                <label className="" for="">Non-detachable Supply Cord B </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Appliance_Coupler_B} onChange={(e) => setPostData({ ...postData, Appliance_Coupler_B: e.target.checked })} />
                                <label className="" for="">Appliance Coupler B </label>

                            </div>

                        </div>
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">other types
                            </label>

                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Permanent_connection} onChange={(e) => setPostData({ ...postData, Permanent_connection: e.target.checked })} />
                                <label className="" for="">Permanent connection
                                </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Mating_connector} onChange={(e) => setPostData({ ...postData, Mating_connector: e.target.checked })} />
                                <label className="" for="">Mating connector
                                </label>

                            </div>


                        </div>
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Equipment Mobility

                            </label>

                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Movable} onChange={(e) => setPostData({ ...postData, Movable: e.target.checked })} />
                                <label className="" for="">Movable
                                </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Transportable} onChange={(e) => setPostData({ ...postData, Transportable: e.target.checked })} />
                                <label className="" for="">Transportable
                                </label>

                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Stationary_for_building_in} onChange={(e) => setPostData({ ...postData, Stationary_for_building_in: e.target.checked })} />
                                <label className="" for="">Stationary for building-in

                                </label>

                            </div>


                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Wall_ceiling_mounted_SRME_rack_mounted} onChange={(e) => setPostData({ ...postData, Wall_ceiling_mounted_SRME_rack_mounted: e.target.checked })} />
                                <label className="" for="">Wall/ceiling-mounted SRME/rack-mounted

                                </label>

                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Hand_held} onChange={(e) => setPostData({ ...postData, Hand_held: e.target.checked })} />
                                <label className="" for="">Hand-held

                                </label>

                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Other} onChange={(e) => setPostData({ ...postData, Other: e.target.checked })} />
                                <label className="" for="">Other

                                </label>

                            </div>

                        </div>
                        <br />
                        <hr />
                        <hr />

                        <br />

                        <br />

                        <br />
                        <h3>product inviromenttal information</h3>
                        <hr />
                        <br />
                        <br />
                        <hr />
                        <hr />
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Pollution Degree
                            </label>

                            <div className="">
                                <input type="radio" id="" name="customRadip" className="" value='P1' onChange={(e) => setPostData({ ...postData, Pollution_Degree: e.target.value })} />
                                <label className="" for="">P1 </label>
                            </div>
                            <div className="">
                                <input type="radio" id="" name="customRadip" className="" value=' P2' onChange={(e) => setPostData({ ...postData, Pollution_Degree: e.target.value })} />
                                <label className="" for=""> P2  </label>
                            </div>  <div className="">
                                <input type="radio" id="" name="customRadip" className="" value=' P3' onChange={(e) => setPostData({ ...postData, Pollution_Degree: e.target.value })} />
                                <label className="" for=""> P3  </label>
                            </div>

                        </div>
                        <div className="col-5">
                            <label for="inputAddress2" className="form-label"> Manufacturer Specific Max Operating Ambient </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Manufacturer_Specific_Max_Operating_Ambient} onChange={(e) => setPostData({ ...postData, Manufacturer_Specific_Max_Operating_Ambient: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label for="inputAddress2" className="form-label">Ingree Protection Classification
                            </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Ingree_Protection_Classification} onChange={(e) => setPostData({ ...postData, Ingree_Protection_Classification: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label for="inputAddress2" className="form-label">Altitude During Operation

                            </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Altitude_During_Operation} onChange={(e) => setPostData({ ...postData, Altitude_During_Operation: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label for="inputAddress2" className="form-label">Mass Of Equipment (in kg)

                            </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Mass_Of_Equipment} onChange={(e) => setPostData({ ...postData, Mass_Of_Equipment: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label for="inputAddress2" className="form-label">Relative Humidity (%)



                            </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Relative_Humidity} onChange={(e) => setPostData({ ...postData, Relative_Humidity: e.target.value })} />
                        </div>
                        <div className="col-4">
                            <label for="inputAddress2" className="form-label">Atmospheric Pressure [kPa]




                            </label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={postData.Atmospheric_Pressure} onChange={(e) => setPostData({ ...postData, Atmospheric_Pressure: e.target.value })} />
                        </div>
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Indoor or Outdoor

                            </label>

                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Indoor} onChange={(e) => setPostData({ ...postData, Indoor: e.target.checked })} />
                                <label className="" for="">Indoor

                                </label>
                            </div>
                            <div className="">
                                <input type="checkbox" id="" name="" className="" checked={postData.Outdoor} onChange={(e) => setPostData({ ...postData, Outdoor: e.target.checked })} />
                                <label className="" for="">Outdoor
                                </label>

                            </div>


                        </div>
                        <br />

                        <br />

                        <br />
                        <h3>Making and Documentation</h3>
                        <hr />
                        <br />

                        <div className="col-md-4">
                            <label for="inputEmail4" className="form-label">Copy of Marking Plate

                            </label>
                            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, Copy_of_Marking_Plate: base64 })} /></div>

                        </div>
                        <div className="col-md-4">
                            <label for="inputEmail4" className="form-label">Warning/Cautionary Marking


                            </label>
                            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, WarningOrCautionary_Marking: base64 })} /></div>

                        </div>
                        <div className="col-md-3">
                            <label for="inputAddress2" className="form-label">Fuse Type
                            </label>

                            <div className="">
                                <input type="radio" id="" name="customRadii" className="" value='Replaceable' onChange={(e) => setPostData({ ...postData, Fuse_Type: e.target.value })} />
                                <label className="" for="">Replaceable </label>
                            </div>
                            <div className="">
                                <input type="radio" id="" name="customRadii" className="" value=' Non-Replaceable' onChange={(e) => setPostData({ ...postData, Fuse_Type: e.target.value })} />
                                <label className="" for=""> Non-Replaceable
                                </label>
                            </div>
                            <div className="">
                                <input type="radio" id="" name="customRadii" className="" value='None' onChange={(e) => setPostData({ ...postData, Fuse_Type: e.target.value })} />
                                <label className="" for=""> None
                                </label>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <label for="inputEmail4" className="form-label">Fuse Marking


                            </label>
                            <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, Fuse_Marking: base64 })} /></div>

                        </div>
                        <br />
                        <hr />
                        <hr />

                        <br />

                        <br />

                        <br />
                        <h3>Complaines Reports</h3>
                        <hr />
                        <br />
                        <div className="col-md-4">
                            <label for="inputAddress2" className="form-label">Report Number
                            </label>
                            <select id="inputState" className="form-select" value={postData.Report_Number} onChange={(e) => setPostData({ ...postData, Report_Number: e.target.value })}>
                                <option value="Complaince Zero">Complaince Zero</option>

                            </select>
                        </div>
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                        {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}





                    </div>









                </div>
            </form>

        </Paper >



    );
};

export default Form;