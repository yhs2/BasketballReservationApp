import axios from 'axios';

//One such difference is in how the two libraries 
//treat HTTP error codes. When using Fetch, 
//if the server returns a 4xx or 5xx series error, 
//your catch() callback won’t be triggered and it is down to the developer 
//to check the response status code to determine if the request was successful.
//Axios, on the other hand, will reject the request promise if one of these status 
//codes is returned.


// const API = axios.create({baseURL: 'https://memories-projecttttt.herokuapp.com'})
const API = axios.create({baseURL: 'http://localhost:5000'})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem("profile")){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPostsByItem = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.searchQuery || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post("/posts",newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);


export const signIn = (signInForm) => API.post('/user/signIn',signInForm);
export const signUp = (signUpForm) => API.post('/user/signUp',signUpForm);

export const createLocation = (newLocation) => API.post('/location', newLocation); 
export const fetchLocation = () => API.get('/location');
export const updateLocation = (id,updateLocation) => API.patch(`/location/${id}`,updateLocation);
export const deleteLocation = (id) => API.delete(`location/${id}`)
