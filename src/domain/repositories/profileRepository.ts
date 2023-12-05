import AsyncStorage from "@react-native-async-storage/async-storage";
import profileService from "../services/profileService";
import { axiosError } from "../../helpers";

async function getOrderByClient(clientId: string) {
    const token = await AsyncStorage.getItem('AUTH_TOKEN');

    try {
        const orders = await profileService.findOrdersByClient(token, clientId);
        return orders;
    } catch (error) {
        axiosError(error);
    }
}

export {    
    getOrderByClient,
}