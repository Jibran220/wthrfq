import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchcomplaince();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const createProducts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createcomplaince(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

