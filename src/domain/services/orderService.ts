import inventoryApi from "../../data";



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

async function create(token: string, order: CreateOrder) {
    try {
        const { data } = await inventoryApi.post(`/orders`, order, {
            headers: {
                Authorization: 'Bearer ' + token,
            }
        });
        return data.message;
    } catch (error) {
        throw error;
    }
}


export default {
    create
}