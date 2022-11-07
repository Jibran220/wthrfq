import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signInv(formData);

        dispatch({ type: AUTH, data });

        navigate('/Homev');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUpv(formData);

        dispatch({ type: AUTH, data });

        navigate('/Homev');

    } catch (error) {
        console.log(error);
    }
};