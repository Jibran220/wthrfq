import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getProducts } from '../../actions/products';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Complaince from '../Complains/Complaince';


const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>


                <Complaince setCurrentId={setCurrentId} />



            </Container>
        </Grow>
    );
};

export default Home;