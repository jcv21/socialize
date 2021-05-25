import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => {
    try {
        // login the user..
        
        history.push('/');
    } 
    catch (e) {
        console.log(e);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        // signup the user..
        
        history.push('/');
    } 
    catch (e) {
        console.log(e);
    }
};