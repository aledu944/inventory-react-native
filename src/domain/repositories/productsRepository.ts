import inventoryApi from "../../data";
import { Product } from "../models";
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


async function findProductBySlug(token:string, slug:string) {
    try {
        const data = await productService.findBySlug(slug);
        return data;
    } catch (error) {
        throw error;
    }
}

export {
    findMany,
    findProductBySlug,
}