import inventoryApi from "../../data"
import { LoginResponse } from "../models";




async function login( email: string, password: string){
    try {
        const { data } = await inventoryApi.post<LoginResponse>('/auth/login', { email, password});
        return data;
    } catch (error) {
        throw error;
    }
}

async function checkAuth( token: string ){
    try {
        const { data } = await inventoryApi.get<LoginResponse>('/auth/check-auth', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
}


export default {
    login,
    checkAuth
}