import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { Navigate } from 'react-router-dom';

export const getRFQ = () => async (dispatch) => {
    try {
        const { data } = await api.fetchrfqmanager();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createRFQ = (post) => async (dispatch) => {
    try {
        const { data } = await api.createrfqmanager(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log("the eroooookhnijkoooor");
    }
};
export const createexcel = (post) => async (dispatch) => {
    try {
        const { data } = await api.createProducts(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log("the eroooooor excel");
    }
};

export const updateProducts = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateRFQ(id, post);

        dispatch({ type: UPDATE, payload: data });
        Navigate('/')
    } catch (error) {
        console.log(error);
    }
};


export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    try {
        const { data } = await api.likePost(id, user?.token);

        dispatch({ type: LIKE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deleteProducts = (id) => async (dispatch) => {
    try {
        await await api.deleteRFQ(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};