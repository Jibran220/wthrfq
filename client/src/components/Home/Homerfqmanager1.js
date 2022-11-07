import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getProducts } from '../../actions/products';
import Complains from '../Complains/Complaince';
import RFQ_Manager from '../RFQ_Managers/RFQ_Manager/RFQ_Manager';


const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            <Container>

                <RFQ_Manager currentId={currentId} setCurrentId={setCurrentId} />

            </Container>
        </Grow>
    );
};

export default Home;