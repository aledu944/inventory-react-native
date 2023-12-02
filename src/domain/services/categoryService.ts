import inventoryApi from "../../data";
import { Category, FullCategory } from "../models";

async function findMany(): Promise<Category[]> {
    try {
        const { data } = await inventoryApi.get<Category[]>('/categories');
        return data;
    } catch (error) {
        throw error;
    }
}

async function findBy(term:string): Promise<FullCategory> {
    try {
        const { data } = await inventoryApi.get<FullCategory>(`/categories/${ term }`);
        return data;
    }catch (error) {
        throw error;
    }
    
}

export default {
    findMany,
    findBy,
}