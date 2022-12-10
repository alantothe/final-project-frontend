import { logout } from "./components/shared/utilities/logout";
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:4000/api/',
    timeout: 1000
})


// checks for JWT token
apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user')
    if (userDetails){
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

},
(err) => {
    return Promise.reject(err)
}
);

//public routes

export const login = async (data) => {
    try{

        return await apiClient.post("/auth/login", data)

    }
    catch (exception){
        return {
            error: true,
            exception,
        }
    }
}
export const register = async (data) => {
    try {
        return await apiClient.post("/auth/register", data);
    }
        catch (exception) {
            return {
                error: true,
                exception,
            };
        }
    };


// sercure routes

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;


    if (responseCode) {
      (responseCode === 401 || responseCode === 403) && logout();
    }
  };

  console.log(checkResponseCode)