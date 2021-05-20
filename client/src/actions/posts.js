import * as api from '../api';

// Action Creators
export const getPost = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        console.log(data);

        dispatch({ 
            type: 'FETCH_ALL', 
            payload: data 
        });
    } 
    catch (e) {
        console.log(e.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
 
        dispatch({ 
            type: 'CREATE', 
            payload: data 
        });
    } 
    catch (e) {
        console.log(e.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ 
            type: 'UPDATE', 
            payload: data 
        });
    } 
    catch (e) {
        console.log(e.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);    

        dispatch({
            type: 'DELETE',
            payload: id
        });
    } 
    catch (e) {
        console.log(e);
    }
};