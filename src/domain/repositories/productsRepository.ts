import inventoryApi from "../../data";
import { Product } from "../models";


async function findMany(token: string){
    try {
        const { data } = await inventoryApi.get<Product[]>('/products',{
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })
    
        return data;
    } catch (error) {
        throw error;
    }
}

export {
    findMany,
}