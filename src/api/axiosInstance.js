import axios from 'axios';

const axiosInstance = axios.create({

    baseURL: "https://powermanindia.com/backendApi/api/",
    baseIMG: "https://powermanindia.com/backendApi/uploads/",
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
    },
});

axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => response, error => {
    if (error.response && error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
});

export default axiosInstance;