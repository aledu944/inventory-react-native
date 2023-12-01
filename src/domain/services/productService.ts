import inventoryApi from "../../data"

async function findBySlug(slug: string) {
    try {
        const { data } = await inventoryApi.get(`/products/${slug}`);
        return data;
    } catch (error) {
        throw error;
    }
}


export default {
    findBySlug,
}