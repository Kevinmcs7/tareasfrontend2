import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://tareasbackend2-production.up.railway.app/api',
    withCredentials: true 
})

export default instance