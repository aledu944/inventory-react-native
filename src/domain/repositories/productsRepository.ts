import AsyncStorage from "@react-native-async-storage/async-storage";
import inventoryApi from "../../data";
import { FullProduct, Product } from "../models";
import productService from "../services/productService";


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


async function findProductBySlug(slug:string): Promise<FullProduct> {
    const token = await AsyncStorage.getItem('AUTH_TOKEN');
    try {
        const data = await productService.findBySlug(token, slug);
        return data;
    } catch (error) {
        throw error;
    }
}

export {
    findMany,
    findProductBySlug,
}