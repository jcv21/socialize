import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPosts) => axios.post(url, newPosts);
export const updatePosts = (id, updatePosts) => axios.patch(`${url}/${id}`, updatePosts);