import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8080/", 
    // timeout: 100000, 
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});


// Add a response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors here
        return Promise.reject(error);
    }
);

export default api;
