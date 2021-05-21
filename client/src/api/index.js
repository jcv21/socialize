import axios from 'axios';

const url = 'https://my-socialize-project.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPosts) => axios.post(url, newPosts);
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);