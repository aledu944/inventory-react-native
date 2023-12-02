import inventoryApi from "../../data";
import { Category } from "../models";
import categoryService from "../services/categoryService";



async function findAllCategories(): Promise<Category[]> {
    try {
        const categories  = await categoryService.findMany();
        return categories;
    } catch (error) {
        throw error;
    }
}

async function findCategoryBySlug(slug: string) {
    try {
        const category = await categoryService.findBy(slug);
        return category;
        
    } catch (error) {
        throw error;
    }
    
}

export {
    findAllCategories,
    findCategoryBySlug
}