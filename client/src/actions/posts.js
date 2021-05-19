import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
    
        dispatch({ 
            type: 'FETCH_ALL', 
            payload: data 
        });
    } 
    catch (e) {
        console.log(e.message);
    }
};

export const createPosts = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post);
 
        console.log(data);

        dispatch({ type: 'CREATE', payload: data });
    } 
    catch (e) {
        console.log(e);
    }
};