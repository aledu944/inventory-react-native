import inventoryApi from "../../data";
import { Category } from "../models";

export async function findMany(): Promise<Category[]> {
    try {
        const { data } = await inventoryApi.get<Category[]>('/categories');
        return data;
    } catch (error) {
        throw error;
    }
}


export default {
    findMany,
}