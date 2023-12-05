import AsyncStorage from "@react-native-async-storage/async-storage";
import orderService from "../services/orderService"
import axios from "axios";
import { ToastAndroid } from "react-native";
import { axiosError } from "../../helpers";

interface CreateOrder {
    total: number,
    type: string,
    clientId: string,
    userId: null,
    items: {
        productId: string,
        quantity: number
    }[]
}


async function createOrder(order: CreateOrder) {
    try {
        const token = await AsyncStorage.getItem('AUTH_TOKEN');
        const message = await orderService.create(token, order)
        return message;
    } catch (error) {
        console.log({...error})
        if( axios.isAxiosError(error) ){
            axiosError(error);
        }
    }
}


export {
    createOrder,
}