import axios from "axios";

const inventoryApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL,
    headers: {
        Accept: 'application/json'
    }
}); 

export default inventoryApi;