import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

/* const url = 'https://my-socialize-project.herokuapp.com/posts'; */

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPosts) => API.post('/posts', newPosts);
export const updatePost = (id, updatePost) => API.patch(`/posts/${id}`, updatePost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);