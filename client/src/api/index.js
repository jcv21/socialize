import axios from 'axios';

const server = 'https://my-socialize-project.herokuapp.com';
const API = axios.create({ baseURL: server });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

/* const url = 'https://my-socialize-project.herokuapp.com/posts'; */

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPosts) => API.post('/posts', newPosts);
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);