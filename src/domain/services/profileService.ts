import inventoryApi from "../../data";
import { CustomerPurchases } from "../models/profile/CustomerPurchases";


async function findOrdersByClient(token: string, clientId:string) {
    try {
        const { data } = await inventoryApi.get<CustomerPurchases[]>(`/orders/client/${clientId}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        return data;
    } catch (error) {
        throw error;
    }
}

export default {
    findOrdersByClient,
}