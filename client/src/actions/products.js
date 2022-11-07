import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { Navigate } from 'react-router-dom';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchProducts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createProducts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createProducts(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log("the erooooooooooooooooooor");
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
        const { data } = await api.updateProductss(id, post);

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
        await await api.deleteProducts(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
};