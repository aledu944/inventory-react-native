import inventoryApi from "../../data"
import { FullProduct } from "../models";

async function findBySlug(token: string, slug: string): Promise<FullProduct> {
    try {
        const { data } = await inventoryApi.get<FullProduct>(`/products/${slug}`, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });
        return data;
    } catch (error) {
        throw error;
    }
}


export default {
    findBySlug,
}